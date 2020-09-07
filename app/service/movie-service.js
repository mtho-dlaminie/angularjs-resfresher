'use strict';

angular.module('movieDB.movie-service', []).factory('movieService', [
  '$http',
  function ($http) {
    const getMovies = () => {
      return $http.get('../mock/marvel-movies.json');
    };

    return {
      getMovies,
    };
  },
]);
