'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenController
 * @description
 * # AdScreenController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenController', function ($scope, $routeParams, adScreenService) {
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
    
    $scope.load = function(){
        adScreenService.getList()
        .then(function(items){
            $scope.items = items;
        });
    };
    $scope.showEditor = function(item){
        var _ = window._;
        item = item || adScreenService.getItem(0);
        $scope.current.item = _.clone(item);
        $scope.state.editing = true; 
    };
    $scope.load();
  });
