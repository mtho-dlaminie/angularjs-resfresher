'use strict';

angular.module('movieDB.catalog', ['ui.bootstrap']).controller('catalogCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $http.get('../mock/marvel-movies.json').then(
      (response) => {
        $scope.movieList = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
]);
