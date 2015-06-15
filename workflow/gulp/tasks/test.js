var gulp = require('gulp');
var gUtil = require('gulp-util');
var path = require('path');
var config = require('../../config');

gulp.task('test', ['test:ci', 'complexity']);

gulp.task('test:ci', ['lint'], function (done) {
  var karma = require('karma').server;
  karma.start({
    configFile: path.join(config.project.path, 'workflow/karma/karma.conf.js')
  }, done);
});

gulp.task('test:server', ['lint'], function() {
  var karma = require('karma').server;
  karma.start({
    configFile: path.join(config.project.path, 'workflow/karma/karma.conf.js'),
    browsers: ['Chrome'],
    reporters: ['progress'],
    autoWatch: true,
    singleRun: false
  }, function(code) {
    gUtil.log('Karma has exited with ' + code);
    process.exit(code);
  });
});
