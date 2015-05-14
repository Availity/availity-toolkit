var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function() {
  runSequence(
    ['less', 'copy', 'concat'],
    'build',
    'server',
    'watch'
  );
});
