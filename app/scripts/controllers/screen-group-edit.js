'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenGroupEditController
 * @description
 * # ScreenGroupEditController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenGroupEditController', function ($scope, screenGroupService) {
    $scope.submitEdit = function(){
        $scope.state.editing = false;
        if($scope.current.item.id){
            screenGroupService.updateItem($scope.current.item);
        }else{
            screenGroupService.addItem($scope.current.item);
        }
    };
    $scope.cancelEdit = function(){ 
        $scope.state.editing = false; 
    };
  });
