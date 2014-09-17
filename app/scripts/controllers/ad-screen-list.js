'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenListController
 * @description
 * # AdScreenListController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenListController', function ($scope, adScreenService, adScreenFilterService) {
    $scope.items = adScreenService.getList();
    $scope.adScreenFilterService = adScreenFilterService;
    
    $scope.showEditor = function(){
        $scope.state.editing = true; 
    };
  });
