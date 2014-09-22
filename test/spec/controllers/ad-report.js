'use strict';

describe('Controller: AdReportController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var AdReportController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdReportController = $controller('AdReportController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
