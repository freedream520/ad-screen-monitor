'use strict';

describe('Controller: ScreenGroupEditController', function () {

  // load the controller's module
  beforeEach(module('adScreenMonitor'));

  var ScreenGroupEditController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenGroupEditController = $controller('ScreenGroupEditController', {
      $scope: scope
    });
  }));

  it('should attach a list of submitEdit to the scope', function () {
    expect(!!scope.submitEdit).toBe(true);
  });
});
