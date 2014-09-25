'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenGroupListController
 * @description
 * # ScreenGroupListController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenGroupListController', function ($scope, screenGroupService) {
    $scope.items = screenGroupService.getList();
  });
