'use strict';

describe('Service: screenGroupService', function () {

  // load the service's module
  beforeEach(module('adScreenMonitor'));

  // instantiate service
  var screenGroupService;
  beforeEach(inject(function (_screenGroupService_) {
    screenGroupService = _screenGroupService_;
  }));

  it('should do something', function () {
    expect(!!screenGroupService).toBe(true);
  });

});
