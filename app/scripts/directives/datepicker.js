'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:datepicker
 * @description
 * # datepicker
 */
angular.module('adScreenMonitor')
  .directive('datepicker', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: true,
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
        element.datepicker(options);
        console.log(attrs);
      }
    };
  });
