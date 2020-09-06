'use strict';

angular
  .module('movieDB', [
    'ngRoute',
    'ui.bootstrap',
    'movieDB.catalog',
    'movieDB.movie',
    'movieDB.paginate-filter',
  ])
  .config([
    '$routeProvider',
    ($routeProvider) => {
      $routeProvider
        .when('/', {
          templateUrl: 'components/catalog/catalog.html',
          controller: 'catalogCtrl',
        })
        .when('/movie/:id', {
          templateUrl: 'components/movie/movie.html',
          controller: 'movieCtrl'
        })
        .otherwise({
          redirectTo: '/',
        });
    },
  ]);
