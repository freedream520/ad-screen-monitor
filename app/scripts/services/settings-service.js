'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.settingsService
 * @description
 * # settingsService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('settingsService', function ($location) {
    var port = $location.port();
    var root = '@@AD_SCREEN_SERVICE';
    if(9000 === port){
      root = 'http://127.0.0.1:8341';
    }

    return {
      getStaticService: function(){
        return root;
      },
      getScreenService: function(){
        return [root, 'ad-screen'].join('/');
      },
      getAPIService: function () {
        return [root, 'ad-screen/api'].join('/');
      },
      getUploadService: function(){
        return [root, 'ad-screen/api/upload'].join('/');
      }
    };
  });
