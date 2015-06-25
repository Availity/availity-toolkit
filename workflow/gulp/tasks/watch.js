var gulp = require('gulp');

var config = require('../../config');

gulp.task('watch', ['watch:templates']);

gulp.task('watch:templates', function() {
  gulp.watch(config.templates.src, ['copy:templates']);
});




