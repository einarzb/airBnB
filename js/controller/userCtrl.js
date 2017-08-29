app.controller('userCtrl',
 ['usersFactory',
  function(usersFactory) {

  this.users = usersFactory.getUsers();

}]);
