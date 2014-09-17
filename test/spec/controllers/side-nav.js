'use strict';

describe('Controller: SideNavController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var SideNavController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SideNavController = $controller('SideNavController', {
      $scope: scope
    });
  }));

  it('should attach a list of items to the scope', function () {
    expect(scope.items.length).toBe(1);
  });
});
