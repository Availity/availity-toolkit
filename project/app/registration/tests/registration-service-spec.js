/*global it, expect, describe, beforeEach, angular */

var app = require('../registration-service');

describe('registration', function() {

  'use strict';

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
