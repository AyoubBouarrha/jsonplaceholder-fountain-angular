import angular from 'angular';
import 'angular-mocks';
import {todolist} from './todolist';

describe('todolist component', () => {
  beforeEach(() => {
    angular
      .module('todolist', ['app/todo/todolist.html'])
      .component('todolist', todolist);
    angular.mock.module('todolist');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<todolist></todolist>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
