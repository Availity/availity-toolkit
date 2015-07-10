// Credit to https://github.com/greypants/gulp-starter
//
var env = require('../env');
env.load(false);

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });
