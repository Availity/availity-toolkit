var _ = require('lodash');
var path = require('path');
var fs = require('fs');

// Preserver new line at the end of a file
function possibleNewline(json) {
  var lastChar = (json.slice(-1) === '\n') ? '\n' : '';
  return lastChar;
}

// https://github.com/stevelacy/gulp-bump/blob/dad1d960e9b1f6b480c909a23ba7d118c436ce6f/index.js#L83
// Figured out which "space" params to be used for JSON.stringfiy.
function space(json) {
  var match = json.match(/^(?:(\t+)|( +))"/m);
  return match ? (match[1] ? '\t' : match[2].length) : '';
}


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


  _.forEach([cli.availity, cli.package, cli.bower], function(data, key) {

    var payload = _.merge({}, data.json, attrs);
    var raw = JSON.stringify(payload, null, data.raw ? space(data.raw) : 2) + possibleNewline(data.raw);

    fs.writeFileSync(path.join(process.cwd(), key+'.json'), raw, 'utf8');

  });

};
