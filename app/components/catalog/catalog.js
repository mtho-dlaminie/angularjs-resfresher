'use strict';

angular.module('movieDB.catalog', ['ui.bootstrap']).controller('catalogCtrl', [
  '$scope',
  'movieService',
  function ($scope, movieService) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    movieService.getMovies().then((response) =>{
      $scope.movieList = response.data;  
      console.log('movies ', response.data) 
    })
  },
]);
