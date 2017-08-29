app.controller('authCtrl',['$scope','authFactory',

function($scope, authFactory) {
$scope.loginForm = false;
$scope.checkAuth = function(){
console.log("lets check if user exist");
}

$scope.login = function (){
  console.log("im login function in ctrlr");
  $scope.loginForm = true;
  authFactory.login();
}

$scope.logout = function (){
  console.log("im logout function in ctrlr");
  authFactory.logout();

}

}]);
