'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.settingsService
 * @description
 * # settingsService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('settingsService', function () {
    var root = 'http://127.0.0.1:8341';

    // Public API here
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
