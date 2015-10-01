/*
Go into 'src' directory:
  1: convert JSX files into commonJS files
  2: concat the commonJS files
  3: Save the new file.
*/

var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

//Main task ran when we call gulp
gulp.task('default', function() {
  return gulp.src('src/**')
  .pipe(react()) // convert jsx files to commonJS
  .pipe(concat('application.js')) // join converted files/ store in new file
  .pipe(gulp.dest('./')) // save new file in current working directory 
});
