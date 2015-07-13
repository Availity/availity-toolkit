var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');


module.exports  = function(cli) {

  var attrs = {
    name: cli.meta.name,
    description: cli.meta.description,
    version: cli.meta.version,
    keywords: cli.meta.keywords,
    url: cli.meta.url,
    author: {
      name: cli.meta.author,
      email: cli.meta.email
    },
    private: true
  };

  cli.availity = _.merge(cli.availity, attrs);
  cli.pkg = _.merge(cli.pkg, attrs);
  cli.bower = _.merge(cli.pkg, attrs);

  jsonfile.writeFileSync(path.join(process.cwd(), 'package.json'));
  jsonfile.writeFileSync(path.join(process.cwd(), 'bower.json'));
  jsonfile.writeFileSync(path.join(process.cwd(), 'availity.json'));

};
