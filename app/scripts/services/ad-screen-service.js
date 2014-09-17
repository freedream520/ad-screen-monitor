'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.adScreenService
 * @description
 * # adScreenService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('adScreenService', function () {
    // Public API here
    var items = [
      { id: '1', title: '广告屏终端1', description: '广告屏终端1是第1个广告屏终端', group: '1' },
      { id: '2', title: '广告屏终端2', description: '广告屏终端2是第2个广告屏终端', group: '2' },
      { id: '3', title: '广告屏终端3', description: '广告屏终端3是第3个广告屏终端', group: '3' },
      { id: '4', title: '广告屏终端4', description: '广告屏终端4是第4个广告屏终端', group: '1' },
      { id: '5', title: '广告屏终端5', description: '广告屏终端5是第5个广告屏终端', group: '2' }
    ];
    return {
      getList: function () {
        return items;
      },
      addItem: function(item){
        items.push(item);
      }
    };
  });
