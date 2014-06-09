
var navbarController = angular.module('NavbarController', []);

navbarController.controller('NavbarController', ['$scope', function($scope) {
  
  // function  to apply active class for Nav bar options
  $scope.code = 1;

  $scope.setTab = function(code){
    $scope.code = code;
    console.log($scope.code);
  }

  $scope.isSet = function(code){
    return $scope.code == code ;
  }

  }]);