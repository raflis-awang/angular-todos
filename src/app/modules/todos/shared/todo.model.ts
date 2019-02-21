export class Todo {
  id: string;
  task: string;
  timeStamp: number;
  done: boolean = true;

  constructor(todo: any = {}) {
    this.id = todo.id || '';
    this.task = todo.task || '';
    this.done = todo.done || false;
    this.timeStamp = todo.timeStamp || new Date().getTime();
  }
}
