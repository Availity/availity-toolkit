module.exports = function(file) {

  var _file = null;
  try {
    _file = require(file);
  }catch(err) {
    // no op
  }

  return _file;

};
