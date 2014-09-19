'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:datetimepicker
 * @description
 * # datetimepicker
 */
angular.module('adScreenMonitor')
  .directive('datetimepicker', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log(attrs);
        element.text('this is the datetimepicker directive');
      }
    };
  });
