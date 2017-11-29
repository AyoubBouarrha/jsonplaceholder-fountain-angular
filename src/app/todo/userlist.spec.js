import angular from 'angular';
import 'angular-mocks';
import {userlist} from './userlist';

describe('userlist component', () => {
  beforeEach(() => {
    angular
      .module('userlist', ['app/todo/userlist.html'])
      .component('userlist', userlist);
    angular.mock.module('userlist');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<userlist></userlist>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
