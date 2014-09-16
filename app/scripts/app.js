'use strict';

/**
 * @ngdoc overview
 * @name adScreenMonitor
 * @description
 * # adScreenMonitor
 *
 * Main module of the application.
 */
angular
  .module('adScreenMonitor', ['ngRoute'])
  .config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(false);
  }])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/screen', {
      templateUrl: 'views/screen.html',
      controller: 'ScreenController'
    })
    .otherwise({
        redirectTo: '/'
    });
  }]);
