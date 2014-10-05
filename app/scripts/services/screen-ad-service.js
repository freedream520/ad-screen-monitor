'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.screenAdService
 * @description
 * # screenAdService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('screenAdService', ['$q', 'Restangular', function ($q, Restangular) {
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
      getItem: function(id){
        if(id){
          var item = Restangular.one('screen-ads', id);
          return item.get();
        }else{
          var deferred = $q.defer();
          deferred.resolve({
            title: '',
            description: ''
          });
          return deferred.promise;
        }
      },
      execute: function(id, ctrl){
        var item = Restangular.one('screen-ads', id);
        return item.put(ctrl, {});
      }
    };
  }]);
