var path = require('path');
var jsonfile = require('jsonfile');

module.export = function() {

  var pkg = jsonfile.readFileSync(path.join(process.cwd(), 'package.json'));
  var bower = jsonfile.readFileSync(path.join(process.cwd(), 'bower.json'));
  var availity = jsonfile.readFileSync(path.join(process.cwd(), 'availity.json'));

  return {
    pkg: pkg,
    bower: bower,
    availity: availity
  };

};
