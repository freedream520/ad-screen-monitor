'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenFilterController
 * @description
 * # AdScreenFilterController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenFilterController', function ($scope, screenGroupService, adScreenFilterService) {
    var items = screenGroupService.getList();
    if(items.length){
        adScreenFilterService.filters.group = items[0].id;
    }
    $scope.items = items;
    $scope.adScreenFilterService = adScreenFilterService;
  });
