var rootVars = {};

rootVars.gulp = require('gulp');

var workflow = require('availity-workflow');
workflow.use(rootVars);

rootVars.gulp.task('default', ['av:default']);

rootVars.gulp.task('lint', ['av:lint']);



