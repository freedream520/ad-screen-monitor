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
    var root = '@@AD_SCREEN_SERVICE';

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
