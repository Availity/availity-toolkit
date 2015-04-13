var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('../config');

gulp.task('copy', ['copy:markup', 'copy:templates']);

gulp.task('copy:templates', function() {
  gulp.src(config.templates.src)
    .pipe(gulp.dest(config.markup.dest))
    .pipe(reload({ stream:true }));
});

gulp.task('copy:markup', function() {
  gulp.src(config.markup.src)
    .pipe(gulp.dest(config.markup.dest))
    .pipe(reload({ stream:true }));
});
