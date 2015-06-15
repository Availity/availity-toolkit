var gulp = require('gulp');
var prompt = require('gulp-prompt');

var config = require('../../config');

gulp.task('deploy', function() {
  gulp.src(config.deploy.src + '/**/*')
    .pipe(prompt.confirm({
      message: 'Are you sure you want to replace the contents of ' + config.deploy.dest +
      ' with the current contents of ' + config.deploy.src + '?',
      default: false
    }))
    .pipe(gulp.dest(config.deploy.dest));
});
