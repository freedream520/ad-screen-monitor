'use strict';

describe('Controller: AdScreenListController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var AdScreenListController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdScreenListController = $controller('AdScreenListController', {
      $scope: scope
    });
  }));

  it('should attach a list of items to the scope', function () {
    expect(scope.items.length).toBe(5);
  });
});
