var rootVars = {};

rootVars.gulp = require('gulp');
rootVars.karma = require('karma');

var workflow = require('availity-workflow');
workflow.gulp(rootVars);

rootVars.gulp.task('default', ['av:default']);

rootVars.gulp.task('lint', ['av:lint']);



