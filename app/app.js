'use strict';

angular
  .module('movieDB', [
    'ngRoute',
    'ui.bootstrap',
    'movieDB.home',
    'movieDB.movies',
    'movieDB.movie',
    'movieDB.movie-service',
    'movieDB.paginate-filter',
  ])
  .config([
    '$routeProvider',
    ($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'components/home/home.html',
          controller: 'homeCtrl',
        })
        .when('/movie/:id', {
          templateUrl: 'components/movie/movie.html',
          controller: 'movieCtrl'
        })
        .when('/movies/', {
          templateUrl: 'components/movies/movies.html',
          controller: 'moviesCtrl',
        })
        .otherwise({
          redirectTo: '/',
        });
    },
  ]);