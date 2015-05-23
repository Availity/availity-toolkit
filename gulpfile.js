global.localRequire = function(name) {
  return require(__dirname + '/' + name);
};

require('./workflow/gulp');
