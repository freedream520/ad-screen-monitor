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
      restrict: 'A',
      require: '?ngModel',
      scope: {
        select: '&'
      },
      link: function postLink(scope, element, attrs, ngModel) {
        if(!ngModel){
          return;
        }

        var options = {};

        options.dateFormat = 'yy-mm-dd';
        var updateModel = function(dateTxt){
          scope.$apply(function(){
            ngModel.$setViewValue(dateTxt);
          });
        };

        options.onSelect = function(dateTxt, picker){
          console.log(picker);
          updateModel(dateTxt);
          if(scope.select){
            scope.$apply(function(){
              scope.select({ date: dateTxt });
            });
          }
        };

        ngModel.$render = function(){
          element.datepicker('setDate', ngModel.$viewValue || '');
        };
        element.datetimepicker(options);
        console.log(attrs);
      }
    };
  });
