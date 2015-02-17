// https://github.com/stevelacy/gulp-bump

var gulp = require('gulp');
var bump = require('gulp-bump');
var gutil = require('gulp-util');
var git = require('gulp-git');
var tagVersion = require('gulp-tag-version');
var filter = require('gulp-filter');

gulp.task('bump', function() {
  gutil.log(gutil.colors.red('To bump the version, you must specify :major, :minor, or :patch'));
  gutil.log(gutil.colors.red('Example: gulp bump:minor'));
});

var semver = function(options) {
  gulp.src('package.json')
  .pipe(bump(options))
  .pipe(gulp.dest('./'))
  .pipe(git.commit('bumps package version'))
  .pipe(filter('package.json'))
  .pipe(tagVersion());
};

gulp.task('bump:major', function() {
  semver({ type: 'major' });
});

gulp.task('bump:minor', function() {
  semver({ type: 'minor' });
});

gulp.task('bump:patch', function() {
  semver({ type: 'patch' });
});
