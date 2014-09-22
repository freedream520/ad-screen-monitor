'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:AdReportController
 * @description
 * # AdReportController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('AdReportController', function ($scope) {
    $scope.echartsData = {};
    $scope.getEChartsOptions = function(){};
    $scope.getGridOptions = function(){
        return function(){
            return {
                colNames:['id', '广告主题', '广告位置', '物料类型', '投放量'],
                colModel:[
                    {name:'id', hidden: true },
                    {name:'title', index:'title', width:500, align:'left' },
                    {name:'slotType', index:'slotType', width:120, align:'right' },
                    {name:'materielType', index:'end', width:150, align:'right' },
                    {name:'push', index:'push', width:100, align:'right' }
                ],
                width: '100%',
                height: '100%',
                rowNum: 20,
                rowList: [20, 30, 50],
                viewrecords: false,
                hidegrid: false
            };
        };
    };
  });
