'use strict';

angular.module('movieDB.movie', ['ui.bootstrap']).controller('movieCtrl', [
  '$scope',
  '$filter',
  '$http',
  '$routeParams',
  function ($scope, $filter, $http, $routeParams) {
    $scope.movieId = $routeParams.id;

    $http.get('../mock/marvel-movies.json').then(
      (response) => {
        $scope.movie = $filter('filter')(response.data, {
          id: $scope.movieId,
        })[0];
      },
      (error) => {
        console.log(error);
      }
    );
  },
]);
