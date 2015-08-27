require('angular');
require('angular-mocks');

var context = require.context(__dirname, true, /-spec.js$/ );
context.keys().forEach(context);