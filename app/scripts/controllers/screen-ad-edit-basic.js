'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:ScreenAdEditBasicController
 * @description
 * # ScreenAdEditBasicController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('ScreenAdEditBasicController', function ($scope) {
    var slotTypes = [
        { name: 'carousel', description: '1#轮播位置' },
        { name: 'fix', description: '2#固定位置' },
        { name: 'scroll', description: '3#滚动位置' },
    ];
    var slotMaterielTypes = {
        carousel: [ { name: 'image', description: '图片物料（宽高比4：3）'}, { name: 'video', description: 'MP4视频物料（宽高比4：3）'} ],
        fix: [ { name: 'image', description: '图片物料（宽高比2：3）'} ],
        scroll: [ { name: 'text', description: '文本广告（少于25字）'} ]
    };
    var slotType = slotTypes[0].name;
    var materielTypes = slotMaterielTypes[slotType];

    $scope.current.item.slotType = slotType;
    $scope.slotTypes = slotTypes;
    $scope.materielTypes = materielTypes;

    $scope.changeSlotType = function(){
        var slotType = $scope.current.item.slotType;
        $scope.materielTypes = slotMaterielTypes[slotType];
    };
  });
