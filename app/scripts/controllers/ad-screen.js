'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenController
 * @description
 * # AdScreenController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenController', function ($scope, $routeParams) {
    var group = 0;
    if($routeParams.hasOwnProperty('group')){
        group = $routeParams.group;
    }
    $scope.group = group;
    $scope.state = {
        editing: false
    };
    $scope.current = {
        item: {}
    };
  });
