'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitor.directive:fileupload
 * @description
 * # fileupload
 */
angular.module('adScreenMonitor')
  .directive('fileupload', function () {
    return {
      restrict: 'A',
      scope: {
        done: '&',
        progress: '&'
      },
      link: function postLink(scope, element, attrs) {
        var $ = window.$;
        console.log(attrs);
        var options = {
            url: attrs.url || '',
            autoUpload: true,
            dataType: 'json'
        };

        if(scope.done){
            options.done = function(){
                scope.$apply(function(e, data){
                    scope.done({ e: e, data: data });
                });
            };
        }

        if(scope.progress){
            options.progress = function(e, data){
                scope.$apply(function(){
                    scope.progress({ e: e, data: data });
                });
            };
        }
        $(element).fileupload(options); 
      }
    };
  });
