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
    $scope.adScreenFilterService = adScreenFilterService;
    screenGroupService.getList()
    .then(function(items){
        $scope.items = items;
        if(items.length){
            var group = items[0].id;
            if($scope.group){
                group = $scope.group;
            }
            adScreenFilterService.filters.group = group;
        }
    });
  });
