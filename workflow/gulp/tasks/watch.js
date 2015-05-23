var gulp = require('gulp');

var config = localRequire('workflow/config');

gulp.task('watch', ['watch:less', 'watch:templates']);

gulp.task('watch:less', function() {
  gulp.watch(config.less.targets, ['less']);
});

gulp.task('watch:js', function() {
  gulp.watch(config.js.targets, ['build']);
});

gulp.task('watch:templates', function() {
  gulp.watch(config.templates.src, ['copy:templates']);
});




