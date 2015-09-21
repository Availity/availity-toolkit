'use strict';

var angular = require('angular');
var _ = require('lodash');

var app = angular.module('app', ['ng']);
window.APP_VERSION = APP_VERSION;

// Allow services, factories, etc. to add dependencies
// asynchronously
app.addModules = function(_modules) {

  var modules = _modules;
  if (!_.isArray(modules)) {
    modules = [modules];
  }

  _.forEach(modules, function(module) {
    var contains = _.contains(app.requires, module);
    if (!contains) {
      app.requires.push(module);
    }
  });

};

module.exports = app;
