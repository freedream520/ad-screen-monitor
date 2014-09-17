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
      redirectTo: '/ad-screen'
      /*
      templateUrl: 'views/home.html',
      controller: 'HomeController'
      */
    })
    .when('/ad-screen', {
      templateUrl: 'views/ad-screen.html',
      controller: 'AdScreenController'
    })
    .when('/screen-ad', {
      templateUrl: 'views/screen-ad.html',
      controller: 'ScreenAdController'
    })
    .when('/screen-group', {
      templateUrl: 'views/screen-group.html',
      controller: 'ScreenGroupController'
    })
    .otherwise({
      redirectTo: '/ad-screen'
    });
  }]);
