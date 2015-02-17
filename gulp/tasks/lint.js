var gulp = require('gulp');

gulp.task('lint', function () {

  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var jscs = require('gulp-jscs');

  var config = require('../config').js;

  gulp.src(config.src)
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
