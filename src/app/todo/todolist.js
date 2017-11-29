class TodolistController {

  constructor(PostService, $rootScope, $log, $scope) {
    this.scopeForWatch = $scope;
    this.console = $log;
    this.todos = [];
    this.selectedUser = 'Veuillez choisir un Utilisateur';
    this.postService = PostService;
    this.rootScope = $rootScope;

    // Observatoin du changement de l'utilisateur partagé
    this.scopeForWatch.$watch(() => this.rootScope.user, () => {
      if (this.rootScope.user !== null) {
        this.getTodosByUser();
      }
    });
  }

  // Recuperation des todos par l'utilisateur partagé
  getTodosByUser() {
    this.todos = [];
    if (this.rootScope.todosByUser.has(this.rootScope.user.id)) {
      this.console.log('existe');
      this.todos = this.rootScope.todosByUser.get(this.rootScope.user.id);
    } else {
      this.postService.getTodos(data => {
        data.forEach(todo => {
          if (todo.userId === this.rootScope.user.id) {
            this.todos.push(todo);
          }
        }, this);
        this.console.log(this.todos);
        this.rootScope.todosByUser.set(this.rootScope.user.id, this.todos);
        this.console.log(this.rootScope.todosByUser);
      });
    }
  }

}

export const todolist = {
  template: require('./todolist.html'),
  controller: TodolistController
};

