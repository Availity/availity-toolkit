var gulp = require('gulp');

gulp.task('reports', ['test:ci', 'complexity']);
