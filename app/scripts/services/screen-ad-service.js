'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.screenAdService
 * @description
 * # screenAdService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('screenAdService', ['Restangular', function (Restangular) {
    var collection = Restangular.all('screen-ads');
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
