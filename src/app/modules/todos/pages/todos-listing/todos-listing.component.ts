import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoService } from '../../shared/todo.service';
import { Todo } from '../../shared/todo.model';

@Component({
  selector: 'app-todos-listing',
  templateUrl: './todos-listing.component.html',
  styleUrls: ['./todos-listing.component.scss']
})
export class TodosListingComponent implements OnInit {

  isLoading: boolean = true;
  todos: Todo[];

  get formData(): FormGroup {
    return this.todoService.form;
  }

  constructor(
    private router: Router,
    private todoService: TodoService,
  ) {
    this.todoService.getLists().subscribe((todos: Array<Todo>) => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  ngOnInit() {

  }

  changeStatus(data: Todo, event: any) {
    data.done = event.currentTarget.checked;
    const todo = new Todo(data);
    this.todoService.update(todo).then(() => {
      this.formData.reset();
    }, () => {

    });
  }

  remove(data: Todo) {
    if (!data) {
      return;
    }
    this.todoService.remove(data.id).then(() => {
      this.formData.reset();
    }, () => {

    });
  }

  submit(data: Todo) {
    this.todoService.create(new Todo(data)).then(() => {
      this.formData.reset();
    }, () => {

    });
  }
}
