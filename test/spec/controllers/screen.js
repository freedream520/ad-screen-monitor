'use strict';

describe('Controller: ScreenController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenController = $controller('ScreenController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
