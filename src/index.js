
import angular from 'angular';
import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';
import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import {todo} from './app/todo/todo';
import {todolist} from './app/todo/todolist';
import {userlist} from './app/todo/userlist';

import './index.css';

class PostService {
  constructor($http) {
    this.$http = $http;
  }
  getUsers(callback) {
    const endPoint = 'https://jsonplaceholder.typicode.com/users';
    this.$http.get(endPoint).then(response => {
      callback(response.data);
    });
  }

  getPosts(callback) {
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    this.$http.get(endPoint).then(response => {
      callback(response.data);
    });
  }

  getUserById(callback, idUser) {
    const endPoint = 'https://jsonplaceholder.typicode.com/users/' + idUser;
    this.$http.get(endPoint).then(response => {
      callback(response.data);
    });
  }

  getTodos(callback) {
    const endPoint = 'https://jsonplaceholder.typicode.com/todos';
    this.$http.get(endPoint).then(response => {
      callback(response.data);
    });
  }
}

angular
  .module('app', [techsModule, 'ui.router'])
  .service('PostService', PostService)
  .config(routesConfig)
  .run($rootScope => {
    // propriete pour la communication entre todolist et userlist
    $rootScope.user = null;
    // propriete publique à pour maintenir la listes des todos jusqu'à l'actualisation de la page
    $rootScope.todosByUser = new Map();
  })
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('todo', todo)
  .component('todoList', todolist)
  .component('userList', userlist);
