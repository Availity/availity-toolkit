'use strict';

require('./vendor');
require('angular-mocks');

var context = require.context(__dirname, true, /-spec\.js$/);
context.keys().forEach(context);
