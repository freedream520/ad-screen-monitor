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
    $scope.screenGroups = [];
    $scope.adScreens = [];
    
    screenGroupService.getList()
    .then(function(items){
        $scope.screenGroups = items;
    });
    adScreenService.getList()
    .then(function(items){
        $scope.adScreens = items;
    });

    $scope.changeScreenGroups = function(group){
        $scope.$emit('parent-click', group);
    };
    $scope.changeAdScreens = function(scree){
        $scope.$emit('child-click', scree);
    };
  });
