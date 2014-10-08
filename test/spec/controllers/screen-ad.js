'use strict';

describe('Controller: ScreenAdController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenAdController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenAdController = $controller('ScreenAdController', {
      $scope: scope
    });
  }));

  it('should attach a list of getGridOptions to the scope', function () {
    //expect(!!scope.getGridOptions).toBe(true);
  });
});
