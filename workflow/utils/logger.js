var utils = require('gulp-util');
var chalk = require('chalk');
var util = require('util');

var config = require('../config');

var prefix = chalk.yellow('[toolkit]');

var log = function(color, message) {
  utils.log([prefix, chalk[color](util.format.apply(util, message))].join(' '));
};

module.exports = {

  info: function() {
    if(config.args.verbose) {
      log('blue', Array.prototype.slice.call(arguments));
    }
  },

  warn: function() {
    log('yellow', Array.prototype.slice.call(arguments));
  },

  error: function() {
    log('red', Array.prototype.slice.call(arguments));
  }
};
