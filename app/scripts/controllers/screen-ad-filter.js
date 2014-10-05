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
    $scope.screenFilters = {};

    $scope.screenGroups = [];
    $scope.adScreens = [];
    $scope.groupScreens = [];

    var setGroupScreens = $scope.setGroupScreens = function(){
        var item, items = [], group = $scope.screenFilters.group;
        for(var i = 0; i < $scope.adScreens.length; i++){
            item = $scope.adScreens[i];
            if(group === item.group){
                items.push(item);
            }
        }
        $scope.groupScreens = items;
        if(items.length){
            $scope.adFilters.adScreen = items[0].id;
        }
    };
    
    screenGroupService.getList()
    .then(function(items){
        $scope.screenGroups = items;
        if(items.length){
            $scope.screenFilters.group = items[0].id;
        }
    });
    setGroupScreens();
    adScreenService.getList()
    .then(function(items){
        $scope.adScreens = items;
        setGroupScreens();
    });
  });
