var gulp = require('gulp');
var webpack = require('webpack');
var gWebpack = require('gulp-webpack');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var named = require('vinyl-named');

var config = require('../config');
var webpackConfig = require('../webpack-config');

gulp.task('build', ['build:dev']);

gulp.task('build:dev', function() {
  var filter = require('gulp-filter')('**/*.{css,js}');
  return gulp.src([config.app.src, config.vendor.src])
    .pipe(named())
    .pipe(gWebpack(webpackConfig, webpack, function(error, stats) {

      var _stats = stats.toString({
        colors: true,
        reasons: true,
        cached: true,
        source: false,
        chunks: false
      });

      console.log('Webpack debug:\n\n', _stats);
    }))
    .pipe(gulp.dest(config.app.dest))
    .pipe(filter) // only reload css and js files
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('build:prod', function() {

  var filter = require('gulp-filter')('**/*.js');
  var uglify = require('gulp-uglify');

  return gulp.src(config.app.src)
    .pipe(gWebpack(webpackConfig))
    .pipe(filter) // Minify only the JavaScript, not the map
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(filter.restore())
    .pipe(gulp.dest(config.app.dest));
});
