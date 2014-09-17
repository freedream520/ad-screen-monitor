'use strict';

describe('Controller: AdScreenController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var AdScreenController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdScreenController = $controller('AdScreenController', {
      $scope: scope
    });
  }));

  it('should attach a list of editing to the scope', function () {
    expect(scope.state.editing).toBe(false);
  });
});
