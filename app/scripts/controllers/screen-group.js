'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenGroupController
 * @description
 * # ScreenGroupController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenGroupController', function ($scope) {
    $scope.state = {
        editing: false
    };
    $scope.current = {
        item: {}
    };
  });
