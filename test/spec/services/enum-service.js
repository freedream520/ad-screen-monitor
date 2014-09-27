'use strict';

describe('Service: enumService', function () {

  // load the service's module
  beforeEach(module('adScreenMonitor'));

  // instantiate service
  var enumService;
  beforeEach(inject(function (_enumService_) {
    enumService = _enumService_;
  }));

  it('should do something', function () {
    expect(!!enumService).toBe(true);
  });

});
