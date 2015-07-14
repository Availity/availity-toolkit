
var gulp = require('gulp');
var workflow = require('availity-workflow');

workflow.gulp(gulp);

gulp.task('default', ['av:default']);

gulp.task('lint', ['av:lint']);



