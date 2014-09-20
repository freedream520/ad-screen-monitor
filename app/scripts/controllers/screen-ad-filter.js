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
    $scope.screenGroups = screenGroupService.getList();
    $scope.adScreens = adScreenService.getList();
  });
