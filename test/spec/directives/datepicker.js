'use strict';

describe('Directive: datepicker', function () {

  // load the directive's module
  beforeEach(module('adScreenMonitor'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    console.log(element);
    console.log($compile);
    //element = angular.element('<datepicker></datepicker>');
    //element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the datepicker directive');
  }));
});
