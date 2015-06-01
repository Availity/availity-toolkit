var path = require('path');
var fs = require('fs');
var _ = require("lodash");

var config;

if(process.env.NODE_ENV !== 'production') {
  try {
    stats = fs.statSync('./project/config/developer-config.js');
    developerConfig = _.defaults({}, config, require('./project/config/developer-config'));
  } catch (e) {

  }
  try {
    stats = fs.statSync('./project/config/project-config.js');
    developerConfig = _.defaults({}, config, require('./project/config/project-config'));
  } catch (e) {

  }
}

try {
  stats = fs.statSync('./global-config.js');
  developerConfig = _.defaults({}, config, require('./global-config'));
}catch (e) {

}

module.exports = config;
