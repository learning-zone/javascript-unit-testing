const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
  'simple',
  shell.task(['cucumber.js simple/features -r simple/steps'])
);
