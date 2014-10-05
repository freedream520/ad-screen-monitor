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
    $scope.materielTypes = materielTypes;

    $scope.types = {
        slot: slotTypes,
        materiel: []
    };

    var setMaterielTypes = $scope.setMaterielTypes = function(slotType){
        var item, items = [];
        $scope.current.item.slotType = $scope.current.item.slotType || (!!slotTypes.length ? slotTypes[0].name : '');
        slotType = slotType || $scope.current.item.slotType;
        for(var i = 0; i < materielTypes.length; i++){
            item = materielTypes[i];
            if(slotType === item.slotType){
                items.push(item);
            }
        }
        if(items.length){
            $scope.current.item.materielType = items[0].name;
        }
        $scope.types.materiel = items;
    };

    setMaterielTypes();
    screenAdService.getItem(aid).then(function(item){
        $scope.current.item = item;
        setMaterielTypes(item.slotType);
    });

    $scope.$on('fileuploaddone', function(e, data){
        $scope.current.item.path = data.result.files[0].path;
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
