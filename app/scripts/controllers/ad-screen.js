'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenController
 * @description
 * # AdScreenController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenController', function ($scope) {
    $scope.state = {
        editing: false
    };
  });
