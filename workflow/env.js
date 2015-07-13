var emoji = require('node-emoji');
var path = require('path');
var _ = require('lodash');
var argv = require('minimist')(process.argv.slice(2));
var chalk = require('chalk');

var logger = require('./utils/logger');
var file  = require('./utils/file');

var env = {

  load: function() {

    // DEFAULT CONFIG
    var defaultConfig = file(path.join(__dirname, '../default-config'));
    if(!defaultConfig) {

      if(!argv.silence) {
        logger.error(emoji.get('no_entry_sign') + '  missing default configuration ' + chalk.gray('./default-config.js') + '.' );
        logger.error(emoji.get('no_entry_sign') + '  see https://github.com/Availity/availity-toolkit for further instructions');
      }

      process.exit(1);
    }

    // DEVELOPER CONFIG
    var developerConfig = file(path.join(__dirname, '../project/config/developer-config'));
    if(!developerConfig && (process.env.NODE_ENV !== 'production' || process.env.NODE_ENV !== 'testing')) {

      if(!argv.silence) {
        logger.warn('-----------------------------------------------');
        logger.warn(emoji.get('warning') + '  missing ' + chalk.gray('./project/config/developer-config'));
        logger.warn();
        logger.warn('To override the default configuration create');
        logger.warn('a developer.config.js in your project/config folder.');
        logger.warn('-----------------------------------------------');
      }
    }

    // COMMAND LINE
    // var args = argv(process.argv.slice(2));

    // SAVE options - _.merge will not merge undefined values into defined values.
    this._options =  _.merge({}, defaultConfig, developerConfig);

  },

  options: function() {
    return this._options;
  },

  config: function() {
    var environment = process.env.NODE_ENV || 'development';
    return this._options[environment];
  }

};

module.exports = env;


