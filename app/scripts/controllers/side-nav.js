'use strict';

/**
 * @ngdoc function
 * @name adScreenMonitor.controller:SideNavController
 * @description
 * # SideNavController
 * Controller of the adScreenMonitor
 */
angular.module('adScreenMonitor')
  .controller('SideNavController', function ($scope) {
    var items = [
        { 
            title: '广告屏管理', url: '#', active: false, open: false, 
            items:  [
                { title: '终端组', url: '#/screen-group', active: false },
                { title: '终端管理', url: '#/ad-screen', active: false },
                { title: '广告管理', url: '#/screen-ad', active: false },
                { title: '添加广告', url: '#/screen-ad-edit', active: false }
                //{ title: '广告报表', url: '#/ad-report', active: false }
            ] 
        }
    ];
    if(items.length){
        items[0].active = items[0].open = true;
    }
    $scope.items = items;
  });
