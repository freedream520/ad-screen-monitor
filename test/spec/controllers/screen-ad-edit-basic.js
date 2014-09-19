'use strict';

describe('Controller: ScreenAdEditBasicController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenAdEditBasicController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.current = {
        item: {}
    };
    ScreenAdEditBasicController = $controller('ScreenAdEditBasicController', {
      $scope: scope
    });
  }));

  it('should attach a list of slotTypes to the scope', function () {
    expect(scope.slotTypes.length).toBe(3);
  });
});
