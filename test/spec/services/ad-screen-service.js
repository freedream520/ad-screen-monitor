'use strict';

describe('Service: adScreenService', function () {

  // load the service's module
  beforeEach(module('adScreenMonitor'));

  // instantiate service
  var adScreenService;
  beforeEach(inject(function (_adScreenService_) {
    adScreenService = _adScreenService_;
  }));

  it('should do something', function () {
    expect(!!adScreenService).toBe(true);
  });

});
