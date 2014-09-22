'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:echarts
 * @description
 * # echarts
 */
angular.module('adScreenMonitor')
  .directive('echarts', function () {
    return {
      restrict: 'A',
      scope: {
        options: '&'
      },
      link: function postLink(scope, element, attrs) {
        console.log(scope);
        console.log(element);
        console.log(attrs);
        /*
        var chart, option, echarts = window.echarts;
        if (chart && chart.dispose) {
            chart.dispose();
        }
        chart = echarts.init(element);
        chart.setOption(option, true);
        */
      }
    };
  });
