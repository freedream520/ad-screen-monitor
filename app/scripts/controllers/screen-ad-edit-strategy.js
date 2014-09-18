'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdEditStrategyController
 * @description
 * # ScreenAdEditStrategyController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdEditStrategyController', function ($scope, screenGroupService, adScreenService) {
    $scope.screenGroups = screenGroupService.getList();
    $scope.adScreens = adScreenService.getList();
  });
