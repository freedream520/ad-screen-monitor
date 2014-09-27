'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitorApp.directive:checkboxs
 * @description
 * # checkboxs
 */
angular.module('adScreenMonitor')
  .directive('checkboxs', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log(scope);
        console.log(attrs);
        element.find('.checkboxs-ctrl :checkbox.checkAll').click(function(){
            var that = this;
            element.find('.checkboxs-container :checkbox').map(function(){
                this.checked = that.checked;
            });
            
        });
        element.find('.checkboxs-ctrl :checkbox.checkInverse').click(function(){
            element.find('.checkboxs-container dl dd :checkbox').map(function(){
                this.checked = !this.checked;
            });
        });
      }
    };
  });
