'use strict';

describe('Controller: AdScreenEditController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var AdScreenEditController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdScreenEditController = $controller('AdScreenEditController', {
      $scope: scope
    });
  }));

  it('should attach a list of submitEdit to the scope', function () {
    expect(!!scope.submitEdit).toBe(true);
  });
});
