var gulp = require('gulp');
var webpack = require('webpack');
var gWebpack = require('gulp-webpack');
var rename = require('gulp-rename');
var chalk = require('chalk');
var gUtil = require('gulp-util');
var gulpif = require('gulp-if');
var using = require('gulp-using');
var browserSync = require('browser-sync');
var named = require('vinyl-named');

var config = require('../config');
var webpackConfig = require('../webpack-config');

gulp.task('build', ['build:dev']);

gulp.task('build:dev', function() {
  var filter = require('gulp-filter')('**/*.{css,js}');
  return gulp.src([config.app.src, config.vendor.src])
    .pipe(named())
    .pipe(gWebpack(webpackConfig, webpack, function(err, stats) {

      gUtil.log('webpack build completed');

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

    }))
    .pipe(gulp.dest(config.app.dest))
    .pipe(filter) // only reload certain assets
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [build:dev] using'})))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('build:prod', function() {

  var filter = require('gulp-filter')('**/*.js');
  var uglify = require('gulp-uglify');

  webpackConfig.debug =  false;
  webpackConfig.cache =  false;
  webpackConfig.watch =  false;

  return gulp.src(config.app.src)
    .pipe(gWebpack(webpackConfig))
    .pipe(filter) // Minify only the JavaScript, not the map
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(filter.restore())
    .pipe(gulp.dest(config.app.dest));
});
