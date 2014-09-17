'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitor.screenAdService
 * @description
 * # screenAdService
 * Factory in the adScreenMonitor.
 */
angular.module('adScreenMonitor')
  .factory('screenAdService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
