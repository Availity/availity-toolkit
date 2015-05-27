var path = require('path');
var config = require('../config');

var utils = {

  isProduction: function() {
    return process.env.NODE_ENV === 'production';
  },

  isDevelopment: function() {
    return !this.isProduction();
  },

  maps: function() {
    return this.isDevelopment() ? 'eval' : 'source-map';
  },

  entry: function () {
    return 'index.js';
  },


  fileName: function() {
    return this.isProduction() ? '[name]-[hash].js' : '[name].js';
  },

  output: function () {
    return this.isProduction() ? path.join(config.project.path, 'dist') : path.join(config.project.path, 'build');
  }
};

module.exports = utils;
