var gulp = require('gulp'); // responsible for build process
var gutil = require('gulp-util'); // console logging the build process
var source = require('vinyl-source-stream'); // throwing
var browserify = require('browserify'); // dependencies and load orders
var watchify = require('watchify'); // automatically reruns gulp file
var reactify = require('reactify'); // handles converting jsx to js

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPatchs: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build()
  bundler.on('update', build)
});
