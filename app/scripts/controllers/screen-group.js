'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenGroupController
 * @description
 * # ScreenGroupController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenGroupController', function ($scope, screenGroupService) {
    $scope.state = {
        editing: false
    };
    $scope.current = {
        item: {}
    };
    
    $scope.load = function(){
        screenGroupService.getList()
        .then(function(items){
            $scope.items = items;
        });
    };
    $scope.showEditor = function(item){
        item = item || screenGroupService.getItem(0);
        $scope.current.item = angular.copy(item);
        $scope.state.editing = true; 
    };
    $scope.load();
  });
