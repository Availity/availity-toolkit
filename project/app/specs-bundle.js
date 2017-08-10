// DO NOT MODIFY OR DELETE THIS FILE
require('angular');
require('angular-mocks');
require('angular-sanitize');
require('angular-animate');
require('@uirouter/angularjs');
require('availity-angular');
require('angular-mocks');

Error.stackTraceLimit = Infinity;

// DO NOT DELETE OR MODIFY THIS FILE ;)

/* eslint no-var:0 */
var tests = require.context(__dirname, true, /[-|\.]spec\.js$/);
tests.keys().forEach(function(path) {
  try {
    tests(path);
  } catch (err) {
    /* eslint no-console:0 */
    console.error('Error in ' + path);
    console.error(err);
  }
});

// The next two lines provide coverage statistics for your entire application
// only if "index.js" bootstrap's your application
const components = require.context(__dirname, true, /index\.js$/);
components.keys().forEach(components);
