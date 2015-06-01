'use strict';

require('jquery');
require('angular');
require('availity-angular');

var app = require('../module');

app.service('helloService', function() {

  this.hello = function() {
    return 'hi';
  };

});

module.exports = app;
