var gulp = require('gulp');

var config = require('../config');

gulp.task('clean', ['clean:build']);

gulp.task('clean:build', function(cb) {

  var del = require('del');

  del([config.app.dest], cb);
});
