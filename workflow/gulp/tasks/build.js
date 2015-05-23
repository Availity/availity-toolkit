var gulp = require('gulp');
var webpack = require('webpack');
var chalk = require('chalk');
var gUtil = require('gulp-util');

var webpackConfig = localRequire('workflow/webpack/webpack-config');
var loaded = false;

gulp.task('build', ['build:dev']);

gulp.task('build:dev', function(cb) {

  webpack(webpackConfig, function(err, stats) {

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

    if(!loaded) {
      cb();
      loaded = true;
    }

  });
});

// gulp.task('build:prod', function() {

//   var filter = require('gulp-filter')('**/*.js');
//   var uglify = require('gulp-uglify');

//   webpackConfig.debug =  false;
//   webpackConfig.cache =  false;
//   webpackConfig.watch =  false;

//   return gulp.src(config.app.src)
//     .pipe(gWebpack(webpackConfig))
//     .pipe(filter) // Minify only the JavaScript, not the map
//     .pipe(uglify())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(filter.restore())
//     .pipe(gulp.dest(config.app.dest));
// });
