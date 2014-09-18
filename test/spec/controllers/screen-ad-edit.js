'use strict';

describe('Controller: ScreenAdEditController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenAdEditController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenAdEditController = $controller('ScreenAdEditController', {
      $scope: scope
    });
  }));

  it('should attach a list of current to the scope', function () {
    expect(!!scope.current).toBe(true);
  });
});
