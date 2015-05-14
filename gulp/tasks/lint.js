var gulp = require('gulp');
var gulpif = require('gulp-if');
var using = require('gulp-using');

gulp.task('lint', function () {

  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var jscs = require('gulp-jscs');

  var config = require('../config');

  gulp.src(config.js.src)
  .pipe(gulpif(config.args.verbose, using({prefix:'Task [lint] using'})))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
