'use strict';
define([
  'angular',
  'angularRoute'
], function (angular) {
  angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])
    .controller('View1Ctrl', ['$scope', '$http', 'getMovies', '$location', '$rootScope', function ($scope, $http, getMovies, $location, $rootScope) {

      getMovies.getMovies().then(function (data) {
        $scope.list = data.results;
        console.log($scope.list);
      });

      $scope.description = function (id) {

        var url = 'http://api.themoviedb.org/3/movie/' + id + '?api_key=1bf0ee332fc7b032ae03582ee854cf55';

        $http.get(url)
          .success(function (data, status, headers, config) {
            $rootScope.pick = JSON.stringify(data);
            sessionStorage.pick = $rootScope.pick;
            $location.path("/view2");
          })
          .error(function (msg, code) {
            console.log(msg);
          });


      };


    }])
    .factory('getMovies', ['$q', '$http',
      function ($q, $http) {

        var getMovies = function () {
          var deferred = $q.defer();

          var url = 'http://api.themoviedb.org/3/movie/upcoming?api_key=1bf0ee332fc7b032ae03582ee854cf55';

          $http.get(url)
            .success(function (data, status, headers, config) {
              deferred.resolve(data);

            })
            .error(function (msg, code) {
              deferred.reject(msg);
            });

          return deferred.promise;

        };

        return {
          getMovies: getMovies
        }
      }


    ]);
});

