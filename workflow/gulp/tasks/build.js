var gulp = require('gulp');
var webpack = require('webpack');
var gUtil = require('gulp-util');

var webpackConfig = localRequire('workflow/webpack/webpack-config');
var loaded = false;

gulp.task('build', ['build:dev']);

gulp.task('build:dev', function(cb) {

  webpack(webpackConfig, function(err, stats) {

    if(err) {
      throw new gUtil.PluginError('webpack:build-dev', err);
    }

    gUtil.log('[build:webpack]', stats.toString({
      colors: true
    }));


    if(!loaded) {
      cb();
      loaded = true;
    }

  });
});

gulp.task('build:prod', function() {

});
