'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:jqGrid
 * @description
 * # jqGrid
 */
angular.module('adScreenMonitor')
  .directive('jqGrid', function (screenAdService) {
    return {
      restrict: 'A',
      scope: true,
      link: function postLink(scope, element, attrs) {
        var options = screenAdService.getOptions(element), 
            pager = '';
        if(attrs.url){
            options.url = attrs.url;
        }
        if(attrs.datatype){
            options.datatype = attrs.datatype;
        }
        if(attrs.pager){
            pager = options.pager = attrs.pager;
        }
        element.jqGrid(options);
        if(pager){
            element.jqGrid('navGrid', pager, { edit: false, add: false, del: false});
        }
      }
    };
  });
