'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.adScreenService
 * @description
 * # adScreenService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('adScreenService', ['Restangular', function (Restangular) {
    var collection = Restangular.all('ad-screens');
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
          description: '',
          group: ''
        };
      }
    };
  }]);
