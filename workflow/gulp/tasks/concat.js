var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var using = require('gulp-using');
var config = require('../config');

gulp.task('concat', ['concat:polyfill']);

gulp.task('concat:polyfill', function() {
  return gulp.src(config.polyfill.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:polyfill] using'})))
    .pipe(concat(config.polyfill.name))
    .pipe(gulp.dest(config.polyfill.dest));
});
