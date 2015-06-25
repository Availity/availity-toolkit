var gulp = require('gulp');
var changed = require('gulp-changed');
var size = require('gulp-size');

var config = require('../../config');

gulp.task('copy', ['copy:templates']);

gulp.task('copy:templates', function() {
  gulp.src(config.templates.src)
    .pipe(changed(config.markup.dest))
    .pipe(gulp.dest(config.markup.dest))
    .pipe(size({
      showFiles: true,
      title: 'copy:templates'
    }));
});
