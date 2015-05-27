var gulp = require('gulp');
var webpack = require('webpack');
var gUtil = require('gulp-util');

var webpackConfig = require('../../webpack/webpack-config');
var loaded = false;

gulp.task('build', ['build:dev']);

gulp.task('build:dev', function(cb) {

  webpack(webpackConfig, function(err, stats) {

    if(err) {
      throw new gUtil.PluginError('webpack:build-dev', err);
    }

    var _stats = stats.toString({
      colors: true,
      cached: true,
      reasons: false,
      source: false,
      chunks: false
    });

    gUtil.log('[build:webpack]', _stats);

    if(!loaded) {
      cb();
      loaded = true;
    }

  });
});

gulp.task('build:prod', function() {

});
