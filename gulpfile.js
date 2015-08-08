
var gulp = require('gulp');
var karma = require('karma');

var workflow = require('availity-workflow');

workflow.use({
  gulp: gulp,
  karma: karma
});

gulp.task('default', ['av:default']);
gulp.task('lint', ['av:lint']);



