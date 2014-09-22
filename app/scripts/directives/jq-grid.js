'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:jqGrid
 * @description
 * # jqGrid
 */
angular.module('adScreenMonitor')
  .directive('jqGrid', function () {
    return {
      restrict: 'A',
      scope: {
        options: '&'
      },
      link: function postLink(scope, element, attrs) {
        var getOptions = function(){ return {}; };
        if(scope.options){
          getOptions = scope.options();
        }
        var options = getOptions(element), 
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
