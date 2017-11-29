import angular from 'angular';
import 'angular-mocks';
import {todo} from './todo';

describe('todo component', () => {
  beforeEach(() => {
    angular
      .module('todo', ['app/todo/todo.html'])
      .component('todo', todo);
    angular.mock.module('todo');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<todo></todo>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
