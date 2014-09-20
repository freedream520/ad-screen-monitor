'use strict';

describe('Controller: ScreenAdFilterController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenAdFilterController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenAdFilterController = $controller('ScreenAdFilterController', {
      $scope: scope
    });
  }));

  it('should attach a list of screenGroups to the scope', function () {
    expect(!!scope.screenGroups).toBe(true);
  });
});
