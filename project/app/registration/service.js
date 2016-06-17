'use strict';

require('jquery');
require('angular');
require('availity-angular');

var app = require('../module');

app.service('registrationService', function() {

  this.hello = function() {
    return 'hi';
  };

});

module.exports = app;
