/* global it, expect, describe, beforeEach, angular */

'use strict';

var app = require('../registration-service');

describe('registration', function() {

  var registrationService;

  beforeEach(angular.mock.module(app.name));

  beforeEach(angular.mock.inject(function(_registrationService_) {
    registrationService = _registrationService_;
  }));

  it('should be defined', function() {
    expect(registrationService.hello).toBeDefined();
  });

  it('should say hi', function() {
    expect(registrationService.hello()).toBe('hi');
  });

});
