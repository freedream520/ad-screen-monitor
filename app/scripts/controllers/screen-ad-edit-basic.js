'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdEditBasicController
 * @description
 * # ScreenAdEditBasicController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdEditBasicController', function ($scope, enumService, settingsService) {
    var slotTypes = enumService.getSlotTypes();
    var materielTypes = enumService.getMaterielTypes();
    var slotType = slotTypes[0].name;
    var materielType = materielTypes[0].name;
    
    $scope.progress = 0;
    $scope.slotTypes = slotTypes;
    $scope.materielTypes = materielTypes;
    $scope.uploadService = settingsService.getUploadService();
    
    $scope.current.item.slotType = slotType;
    $scope.current.item.materielType = materielType;

    $scope.changeSlotType = function(){
        //$scope.current.item.materielType
    };

    $scope.uploadProgress = function(e, data){
        console.log(e);
        if(data && data.loaded && data.total){
            $scope.progress = parseInt(data.loaded / data.total * 100, 10);
        }
    };

    $scope.uploadFinished = function(e, data){
        console.log(e);
        if(data && data.result && data.result.files && data.result.files.length){
            $scope.current.item.path = data.result.files[0];
        }
    };
  });
