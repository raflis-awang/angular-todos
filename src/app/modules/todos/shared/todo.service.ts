import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private collection: AngularFirestoreCollection<Todo>;
  public form: FormGroup;

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder
  ) {
    this.collection = this.afs.collection<Todo>( 'todos', (item) => {
      return item
        .orderBy('done', 'asc')
        .orderBy('timeStamp', 'desc')
    });

    this.form = this.fb.group({
      task: [null, Validators.required],
      done: [null, Validators.required],
    });
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      if (error.status >= 500) {
        throw error;
      }

      return of(result as T);
    };
  }

  getLists(): Observable<Todo[]> {
    return this.collection.snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data();
            const todo = { ...data, id: action.payload.doc.id };
            return new Todo(todo);
          });
        }),
        tap(() => console.log(`Fetched todos`)),
        catchError(this.handleError('getLists', []))
      );
  }

  remove(id: string): Promise<void> {
    return this.afs.doc(`todos/${id}`).delete();
  }

  async create(todo: Todo): Promise<DocumentReference> {
    return this.collection.add(JSON.parse(JSON.stringify(todo)))
      .then((document: DocumentReference) => {
        console.log(`Todo created : ${document}`);
        return document;
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async update(todo: Todo): Promise<void> {
    console.log(todo);
    return this.afs
      .doc<Todo>(`todos/${todo.id}`)
      .update(JSON.parse(JSON.stringify(todo)))
        .then(data => {
          return data;
      }, (error) => {

        return error;
      });
  }
}
