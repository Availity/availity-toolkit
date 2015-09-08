var gulp = require('gulp');

var workflow = require('availity-workflow');

workflow.use({
  gulp: gulp
});

gulp.task('default', ['av:default']);
gulp.task('lint', ['av:lint']);
gulp.task('test', ['av:test']);
