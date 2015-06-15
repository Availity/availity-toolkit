var gulp = require('gulp');

var config = require('../../config');

gulp.task('watch', ['watch:less', 'watch:templates']);

gulp.task('watch:less', function() {
  gulp.watch(config.less.targets, ['less']);
});

gulp.task('watch:templates', function() {
  gulp.watch(config.templates.src, ['copy:templates']);
});




