class UserlistController {

  constructor(PostService, $rootScope) {
    this.rootScope = $rootScope;
    this.users = [];
    this.selectedUser = 'Veuillez choisir un Utilisateur';
    this.users = PostService.getUsers(data => {
      this.users = data;
    });
  }

  // Changer l'utilisateur courant
  changeCurrentUser(user) {
    this.selectedUser = user.name;
    this.rootScope.user = user;
  }

}

export const userlist = {
  template: require('./userlist.html'),
  controller: UserlistController
};

