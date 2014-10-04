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

    $scope.$on('fileuploaddone', function(e, data){
        $scope.current.item.path = data.result.files[0].path;
    });
  });
