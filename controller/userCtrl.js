var app = angular.module('airbnbApp', []);

app.controller('userCtrl',
 ['usersFactory',
  function(usersFactory) {

  this.users = usersFactory.getUsers();

}]);
