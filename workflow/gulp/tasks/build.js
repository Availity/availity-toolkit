var gulp = require('gulp');
var webpack = require('webpack');
var gUtil = require('gulp-util');

var loaded = false;

gulp.task('build', ['build:dev']);

gulp.task('build:dev', function(cb) {

  var webpackConfig = require('../../webpack/webpack-config');

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

gulp.task('build:prod', function(cb) {

  process.env.NODE_ENV = 'production';

  var webpackConfig = require('../../webpack/webpack-config');

  webpack(webpackConfig, function(err, stats) {

    if(err) {
      throw new gUtil.PluginError('webpack:build-prod', err);
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
