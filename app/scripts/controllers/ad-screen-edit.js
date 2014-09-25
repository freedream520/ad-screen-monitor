'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdScreenEditController
 * @description
 * # AdScreenEditController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdScreenEditController', function ($scope, adScreenService) {
    $scope.submitEdit = function(){
        $scope.state.editing = false;
        $scope.current.item.group = $scope.filters.group;
        if($scope.current.item.id){
            adScreenService.updateItem($scope.current.item)
            .then(function(){
                $scope.load();
            });
        }else{
            adScreenService.addItem($scope.current.item)
            .then(function(){
                $scope.load();
            });
        }
    };
    $scope.cancelEdit = function(){ 
        $scope.state.editing = false; 
    };
  });
