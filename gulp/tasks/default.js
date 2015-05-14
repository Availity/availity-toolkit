var gulp = require('gulp');

gulp.task('default', [
  'less',
  'copy',
  'concat',
  'build',
  'server',
  'watch'
]);
