'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdEditController
 * @description
 * # ScreenAdEditController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdEditController', function ($scope, $location, $routeParams, enumService, screenAdService) {
    var aid = 0;
    if($routeParams.hasOwnProperty('aid')){
        aid = $routeParams.aid;
    }
    $scope.current = {
        item: {}
    };

    var slotTypes = enumService.getSlotTypes();
    var materielTypes = enumService.getMaterielTypes();
    $scope.slotTypes = slotTypes;
    $scope.materielTypes = materielTypes;
    
    screenAdService.getItem(aid).then(function(item){
        if(!item.slotType){
            item.slotType = slotTypes[0].name;
        }
        if(!item.materielType){
            item.materielType = materielTypes[0].name;
        }
        $scope.current.item = item;
    });

    $scope.submitEdit = function(){
        var item = $scope.current.item;
        if(item.id){
            screenAdService.updateItem(item);
        }else{
            screenAdService.addItem(item);
        }
        $location.path('/screen-ad');
    };
  });
