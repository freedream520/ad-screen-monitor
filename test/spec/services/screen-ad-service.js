'use strict';

describe('Service: screenAdService', function () {

  // load the service's module
  beforeEach(module('adScreenMonitor'));

  // instantiate service
  var screenAdService;
  beforeEach(inject(function (_screenAdService_) {
    screenAdService = _screenAdService_;
  }));

  it('should do something', function () {
    //expect(!!screenAdService).toBe(true);
  });

});
