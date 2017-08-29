app.factory('authFactory', ['usersFactory', function(usersFactory){

  var authFactory = {};

  authFactory.login = function(){
    console.log("im login in auth service");
  }

  authFactory.logout = function(){
    console.log("im logout in auth service");
  }

  return authFactory;

}]);
