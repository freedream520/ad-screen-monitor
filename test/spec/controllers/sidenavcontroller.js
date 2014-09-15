'use strict';

describe('Controller: Sidenavcontroller', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var Sidenavcontroller,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Sidenavcontroller = $controller('Sidenavcontroller', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
