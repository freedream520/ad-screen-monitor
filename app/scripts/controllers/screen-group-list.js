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
    
    $scope.showEditor = function(item){
        var _ = window._;
        item = item || screenGroupService.getItem(0);
        $scope.current.item = _.clone(item);
        $scope.state.editing = true; 
    };
  });
