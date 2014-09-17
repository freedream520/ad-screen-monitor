'use strict';

describe('Service: adScreenFilterService', function () {

  // load the service's module
  beforeEach(module('adScreenMonitor'));

  // instantiate service
  var adScreenFilterService;
  beforeEach(inject(function (_adScreenFilterService_) {
    adScreenFilterService = _adScreenFilterService_;
  }));

  it('should do something', function () {
    expect(!!adScreenFilterService).toBe(true);
  });

});
