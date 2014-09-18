'use strict';

describe('Controller: ScreenAdEditStrategyController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenAdEditStrategyController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenAdEditStrategyController = $controller('ScreenAdEditStrategyController', {
      $scope: scope
    });
  }));

  it('should attach a list of screenGroups to the scope', function () {
    expect(!!scope.screenGroups).toBe(true);
  });
});
