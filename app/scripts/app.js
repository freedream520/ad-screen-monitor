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
    .when('/screen-group', {
      templateUrl: 'views/screen-group.html',
      controller: 'ScreenGroupController'
    })
    .when('/ad-screen/:group', {
      templateUrl: 'views/ad-screen.html',
      controller: 'AdScreenController'
    })
    .when('/ad-screen', {
      templateUrl: 'views/ad-screen.html',
      controller: 'AdScreenController'
    })
    .when('/screen-ad', {
      templateUrl: 'views/screen-ad.html',
      controller: 'ScreenAdController'
    })
    .when('/screen-ad-edit', {
      templateUrl: 'views/screen-ad-edit.html',
      controller: 'ScreenAdEditController'
    })
    .when('/screen-ad-edit/:aid', {
      templateUrl: 'views/screen-ad-edit.html',
      controller: 'ScreenAdEditController'
    })
    .otherwise({
      redirectTo: '/ad-screen'
    });
  }]);
