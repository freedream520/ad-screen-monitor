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
    var collection = Restangular.all('screen-groups');
    return {
      getList: function () {
        return collection.getList();
      },
      addItem: function(item){
        return collection.post(item);
      },
      updateItem: function(item){
        var model = Restangular.copy(item);
        return model.put();
      },
      getItem: function(){
        return {
          title: '',
          description: ''
        };
      }
    };
  }]);
