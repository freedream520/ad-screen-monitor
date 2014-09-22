'use strict';

describe('Service: adReportService', function () {

  // load the service's module
  beforeEach(module('adScreenMonitor'));

  // instantiate service
  var adReportService;
  beforeEach(inject(function (_adReportService_) {
    adReportService = _adReportService_;
  }));

  it('should do something', function () {
    //expect(!!adReportService).toBe(true);
  });

});
