app.controller('authCtrl',['$scope','authFactory',

function($scope, authFactory) {

$scope.login = function (){
  console.log("im login function in ctrlr");
  authFactory.login();
}

$scope.logout = function (){
  console.log("im logout function in ctrlr");
  authFactory.logout();

}

}]);
