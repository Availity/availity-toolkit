var gulp = require('gulp');

var config = localRequire('workflow/config');

gulp.task('copy', ['copy:templates']);

gulp.task('copy:templates', function() {
  gulp.src(config.templates.src)
    .pipe(gulp.dest(config.markup.dest));
});
