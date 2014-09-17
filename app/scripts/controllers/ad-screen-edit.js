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
    $scope.item = {
        id: '',
        title: '',
        description: '',
        group: ''
    };

    $scope.submitEdit = function(){
        console.log('submitEdit');
        console.log($scope.state.editing);
        $scope.state.editing = false; 
        adScreenService.addItem($scope.item);
        console.log($scope.state.editing);
    };
    $scope.cancelEdit = function(){ 
        console.log('cancelEdit');
        console.log($scope.state.editing);
        $scope.state.editing = false; 
        console.log($scope.state.editing);
    };
  });
