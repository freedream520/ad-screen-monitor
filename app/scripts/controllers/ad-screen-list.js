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
    
    $scope.showEditor = function(item){
        var _ = window._;
        item = item || adScreenService.getItem(0);
        $scope.current.item = _.clone(item);
        $scope.state.editing = true; 
    };
  });
