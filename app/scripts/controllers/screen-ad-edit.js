'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdEditController
 * @description
 * # ScreenAdEditController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdEditController', function ($scope) {
    $scope.current = {
        item: {}
    };
    $scope.submitEdit = function(){
        console.log($scope.current.item);
    };
  });
