var gulp = require('gulp');

var config = require('../../config');

gulp.task('deploy', function() {
  gulp.src(config.deploy.src + '/**/*')
    .pipe(gulp.dest(config.deploy.dest));
});
