'use strict';

describe('Directive: literal', function () {

  // load the directive's module
  beforeEach(module('adScreenMonitor'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<literal></literal>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the literal directive');
  }));
});
