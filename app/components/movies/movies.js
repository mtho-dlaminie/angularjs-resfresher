'use strict';

angular.module('movieDB.movies', ['ui.bootstrap']).controller('moviesCtrl', [
  '$scope',
  'movieService',
  function ($scope, movieService) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    movieService.getMovies().then((response) =>{
      $scope.movieList = response.data;  
    })
  },
]);
