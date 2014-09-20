'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:literal
 * @description
 * # literal
 */
angular.module('adScreenMonitor')
  .directive('literal', function () {
    return {
      restrict: 'E',
      scope: {
        select: '&'
      },
      replace: true,
      link: function postLink(scope, element, attrs) {
        console.log(attrs);
        console.log(element);
      }
    };
  });
