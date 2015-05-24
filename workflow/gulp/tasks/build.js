var gulp = require('gulp');
var webpack = require('webpack');
var chalk = require('chalk');
var gUtil = require('gulp-util');

var webpackConfig = localRequire('workflow/webpack/webpack-config');
var loaded = false;

gulp.task('build', ['build:dev']);

gulp.task('build:dev', function(cb) {

  webpack(webpackConfig, function(err, stats) {

    if(err) {
      throw new gUtil.PluginError('webpack:build-dev', err);
    }

    var _stats = stats.toString({
      colors: true,
      reasons: true,
      cached: true,
      source: false,
      chunks: false
    });

    gUtil.log(chalk.blue('stats') + '\n', _stats);

    if(!loaded) {
      cb();
      loaded = true;
    }

  });
});

gulp.task('build:prod', function() {

});
