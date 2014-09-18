'use strict';

describe('Controller: ScreenGroupListController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenGroupListController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenGroupListController = $controller('ScreenGroupListController', {
      $scope: scope
    });
  }));

  it('should attach a list of items to the scope', function () {
    expect(scope.items.length).toBe(5);
  });
});
