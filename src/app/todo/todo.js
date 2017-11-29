class TodoController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

export const todo = {
  template: require('./todo.html'),
  css: require('./todo.css'),
  controller: TodoController
};

