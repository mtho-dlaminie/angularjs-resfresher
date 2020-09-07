'use strict';

angular.module('movieDB.movie', ['ui.bootstrap']).controller('movieCtrl', [
  '$scope',
  '$filter',
  'movieService',
  '$routeParams',
  function ($scope, $filter, movieService, $routeParams) {
    const movieId = $routeParams.id;

    movieService.getMovies(movieId).then(
      (response) => {
        $scope.movie = $filter('filter')(response.data, {
          id: movieId,
        })[0];
      },
      (error) => {
        console.log(error);
      }
    );
  },
]);
