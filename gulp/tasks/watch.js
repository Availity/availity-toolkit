var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['watch:less', 'watch:js', 'watch:markup', 'watch:templates']);

gulp.task('watch:less', function() {
  gulp.watch(config.less.targets, ['less']);
});

gulp.task('watch:js', function() {
  gulp.watch([config.app.src, config.vendor.src], ['build']);
});

gulp.task('watch:templates', function() {
  gulp.watch(config.templates.src, ['build']);
});

gulp.task('watch:markup', function() {
  gulp.watch(config.markup.src, ['copy:markup']);
});


