require('angular');
require('angular-mocks');

var context = require.context('../../project/app', true, /-spec$/);
context.keys().forEach(context);
