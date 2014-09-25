'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.screenGroupService
 * @description
 * # screenGroupService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('screenGroupService', ['Restangular', function (Restangular) {
    var groups = Restangular.all('screen-groups');
    return {
      getList: function () {
        return groups.getList();
      },
      addItem: function(item){
        return groups.post(item);
      },
      updateItem: function(item){
        var group = Restangular.copy(item);
        return group.put();
      },
      getItem: function(){
        return {
          title: '',
          description: ''
        };
      }
    };
  }]);
