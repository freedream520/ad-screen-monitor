'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdEditController
 * @description
 * # ScreenAdEditController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdEditController', function ($scope, screenAdService) {
    $scope.current = {
        item: {}
    };
    $scope.submitEdit = function(){
        screenAdService.addItem($scope.current.item);
    };
  });
