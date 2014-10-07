'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdController
 * @description
 * # ScreenAdController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdController', function ($scope, screenGroupService, adScreenService, screenAdService) {
    $scope.adFilters = { active: '1' };
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
            $scope.adFilters.screen = items[0].id;
        }
    };
    
    screenGroupService.getList()
    .then(function(items){
        $scope.screenGroups = items;
        if(items.length){
            $scope.screenFilters.group = items[0].id;
        }
        setGroupScreens();
        adScreenService.getList()
        .then(function(items){
            $scope.adScreens = items;
            setGroupScreens();
        });

    });

    $scope.submitSearch = function(){
        $scope.$emit('search', $scope.adFilters);
    };
    $scope.resetList = function(){
        $scope.$emit('reset');
    };

    $scope.$on('execute', function(e, data){
        screenAdService.execute(data.id, data.action).then(function(){
            angular.element('#adsTable').trigger('reloadGrid'); 
        });
    });
  });
