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
      require: '?ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        console.log(attrs);

        var $ = window.$, items = [], dict = {},
          checkAll = $('.checkboxs-ctrl :checkbox.checkAll', $(element)),
          checkInverse = $('.checkboxs-ctrl :checkbox.checkInverse', $(element));

        function updateModel(){
          var items = [];
          element.find('.checkboxs-container dl dd :checkbox').map(function(){
            if(this.checked){
              items.push(this.value);
            }
          });
          ngModel.$setViewValue(items);
        }
        function setCheckAll(){
          //检查部分全选
          var count = 0, i, dls, dl;
          dls = $('.checkboxs-container dl', $(element));
          for(i = 0; i < dls.length; i++){
            dl = dls[i];
            count = $('dd input:checked', $(dl)).size();
            $('dt :checkbox', $(dl)).prop('checked', !!count);
          }
          count = $('.checkboxs-container dl dd input:checked', $(element)).size();
          checkAll.prop('checked', !!count);
          checkInverse.prop('checked', !!count);
        }

        checkAll.click(function(){
            var that = this;
            element.find('.checkboxs-container :checkbox').map(function(){
                this.checked = that.checked;
            });
            updateModel();
        });
        checkInverse.click(function(){
            element.find('.checkboxs-container dl dd :checkbox').map(function(){
                this.checked = !this.checked;
            });
            setCheckAll();
            updateModel();
        });

        scope.$on('parent-click', function(e, data){
          var dl = element.find('.checkboxs-container dl[data-id=' + data.id + ']');
          var checked = dl.find('dt :checkbox').prop('checked');
          dl.find('dd :checkbox').prop('checked', checked);
          setCheckAll();
          updateModel();
        });
        scope.$on('child-click', function(e, data){
          var dl = element.find('.checkboxs-container dl[data-id=' + data.group + ']');
          var count = dl.find('dd input:checked').size();
          dl.find('dt :checkbox').prop('checked', !!count);
          setCheckAll();
          updateModel();
        });

        ngModel.$render = function(){
          items = ngModel.$viewValue || [];
          items.map(function(item){
            dict[item] = 1;
          });
        };

        scope.$watch(element.find('.checkboxs-container dl dd :checkbox').size(), function(){
          console.log(element.find('.checkboxs-container dl dd :checkbox').size());
          element.find('.checkboxs-container dl dd :checkbox').map(function(){
            this.checked = dict.hasOwnProperty(this.value);
          });
          setCheckAll();
        })
      }
    };
  });
