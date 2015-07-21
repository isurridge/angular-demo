'use strict';

define([
  'angular',
  'angularRoute',
  'components/version/version'
], function (angular) {
  angular.module('myApp.view2', ['ngRoute', 'myApp.version'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      });
    }])
    // We can load the controller only when needed from an external file
    .controller('View2Ctrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      $scope.list = $rootScope.pick;
      $scope.list = JSON.parse($scope.list);
    }]);

});