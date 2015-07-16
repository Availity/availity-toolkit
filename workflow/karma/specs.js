require('angular');
require('angular-mocks');

var context = require.context('../../project/app', true, /-spec\.js$/);
context.keys().forEach(context);
