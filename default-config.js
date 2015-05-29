var path = require('path');
var fs = require('fs');
var _ = require("lodash");


var developerConfig;

try {
  stats = fs.statSync('./project/config/developer-config.js');
  developerConfig = _.defaults({}, developerConfig, require('./project/config/developer-config'));
}catch (e) {

}
try {
  stats = fs.statSync('./project/config/project-config.js');
  developerConfig = _.defaults({}, developerConfig, require('./project/config/project-config'));
}catch (e) {

}
try {
  stats = fs.statSync('./global-config.js');
  developerConfig = _.defaults({}, developerConfig, require('./global-config'));
}catch (e) {

}


module.exports = developerConfig;
