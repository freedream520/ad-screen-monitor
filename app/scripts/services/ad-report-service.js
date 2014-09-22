'use strict';

/**
 * @ngdoc service
 * @name adScreenMonitorApp.adReportService
 * @description
 * # adReportService
 * Service in the adScreenMonitorApp.
 */
angular.module('adScreenMonitor')
  .service('adReportService', function adReportService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
        getReport: function(){
            return {};
        }
    };
  });
