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
    
    $scope.showEditor = function(item){
        var _ = window._;
        item = item || screenGroupService.getItem(0);
        $scope.current.item = _.clone(item);
        $scope.state.editing = true; 
    };
  });
