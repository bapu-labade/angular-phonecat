
var navbarControllers = angular.module('navbarControllers', []);

navbarControllers.controller('navbarControllers', ['$scope','$location',
  function($scope, $location) {
    $scope.about_us = function (){
    	alert("hi");
    	$location.url = '/partials/about-us.html'
    }
  }]);