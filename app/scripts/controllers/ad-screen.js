'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenController
 * @description
 * # AdScreenController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenController', function ($scope, $routeParams, settingsService, adScreenService) {
    var group = 0;
    if($routeParams.hasOwnProperty('group')){
        group = $routeParams.group;
    }
    $scope.state = {
        editing: false
    };
    $scope.current = {
        item: {},
        group: group
    };
    $scope.filters = {};
    $scope.screenService = settingsService.getScreenService();
    
    $scope.load = function(){
        adScreenService.getList()
        .then(function(items){
            $scope.items = items;
        });
    };
    $scope.showEditor = function(item){
        item = item || adScreenService.getItem(0);
        $scope.current.item = angular.copy(item);
        $scope.state.editing = true; 
    };
    $scope.load();
  });
