'use strict';

/**
 * @ngdoc directive
 * @name adScreenMonitorApp.directive:checkboxs
 * @description
 * # checkboxs
 */
angular.module('adScreenMonitor')
  .directive('checkboxs', function (screenGroupService, adScreenService) {
    return {
      restrict: 'A',
      require: '?ngModel',
      templateUrl: './templates/checkboxs.html',
      link: function postLink(scope, element, attrs, ngModel) {
        console.log(attrs);
        var $ = window.$, i, items, dictBranches = {}, dictLeaves = {},
          checkAll = $('.checkboxs-ctrl :checkbox.checkAll', $(element)),
          checkInverse = $('.checkboxs-ctrl :checkbox.checkInverse', $(element));

        scope.branches = [];
        scope.leaves = [];
        
        screenGroupService.getList()
        .then(function(items){
            for(i = 0; i < items.length; i++){
              items[i].checked = dictBranches.hasOwnProperty(items[i].id);
            }
            scope.branches = items;
        });
        adScreenService.getList()
        .then(function(items){
            for(i = 0; i < items.length; i++){
              items[i].checked = dictLeaves.hasOwnProperty(items[i].id);
              dictBranches[items[i].group] = 1;
            }
            scope.leaves = items;
        });

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
        function updateModel(){
          var items = [];
          element.find('.checkboxs-container dl dd :checkbox').map(function(){
            if(this.checked){
              items.push(this.value);
            }
          });
          ngModel.$setViewValue(items);
        }
        
        scope.changeScreenGroups = function (data){
          var dl = element.find('.checkboxs-container dl[data-id=' + data.id + ']');
          var checked = dl.find('dt :checkbox').prop('checked');
          dl.find('dd :checkbox').prop('checked', checked);
          setCheckAll();
          updateModel();
        };
        scope.changeAdScreens = function (data){
          var dl = element.find('.checkboxs-container dl[data-id=' + data.group + ']');
          var count = dl.find('dd input:checked').size();
          dl.find('dt :checkbox').prop('checked', !!count);
          setCheckAll();
          updateModel();
        };

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

        ngModel.$render = function(){
          dictLeaves = {};
          items = ngModel.$viewValue || [];
          for(i = 0; i < items.length; i++){
            dictLeaves[items[i]] = 1;
          }
          setCheckAll();
        };
      }
    };
  });
