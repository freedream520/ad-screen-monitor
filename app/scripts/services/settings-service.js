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
    var root = 'http://127.0.0.1:8341/ad-screen';

    // Public API here
    return {
      getAPIService: function () {
        return [root, 'api'].join('/');
      },
      getStaticService: function(){
        return [root, 'static'].join('/');
      },
      getUploadService: function(){
        return [root, 'api', 'upload'].join('/');
      }
    };
  });
