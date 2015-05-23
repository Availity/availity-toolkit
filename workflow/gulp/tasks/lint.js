var gulp = require('gulp');
var glob = require('glob');
var gulpif = require('gulp-if');
var using = require('gulp-using');

var config = localRequire('workflow/config');

gulp.task('lint', function () {

  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var jscs = require('gulp-jscs');

  gulp.src(config.js.srcAll)
  .pipe(gulpif(config.args.verbose, using({prefix:'Task [lint] using'})))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

var _plato = function(done) {
  var files = glob.sync(config.js.src);
  var excludeFiles = /.*-spec\.js/;
  var plato = require('plato');

  var options = {
    title: 'Code Complexity Report',
    exclude: excludeFiles
  };

  var outputDir = config.js.reportsDir + '/complexity';

  plato.inspect(files, outputDir, options, function platoCompleted(report) {
    var overview = plato.getOverviewReport(report);
    if(config.args.verbose) {
      console.log(overview.summary);
    }
    if(done) {
      done();
    }
  });
};

gulp.task('complexity', function(done) {
  _plato(done);
});


