'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdFilterController
 * @description
 * # ScreenAdFilterController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdFilterController', function ($scope, screenGroupService, adScreenService) {
    $scope.screenGroups = [];
    $scope.adScreens = [];
    
    screenGroupService.getList()
    .then(function(items){
        $scope.screenGroups = items;
    });
    adScreenService.getList()
    .then(function(items){
        $scope.adScreens = items;
    });
  });
