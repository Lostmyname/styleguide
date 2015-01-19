'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var stylish = require('jshint-stylish');

var dieOnError = true;

gulp.task('js-quality', function () {
  var stream = gulp.src('./src/js/**/*.js');

  if (!dieOnError) {
    stream = stream.pipe(plugins.plumber());
  }

  stream = stream.pipe(plugins.jscs())
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(stylish));

  if (dieOnError) {
    stream = stream.pipe(plugins.jshint.reporter('fail'));
  }

  return stream;
});

gulp.task('js', ['js-quality'], function () {
  var bundler = browserify('./src/js/script.js');

  return bundler.bundle()
    .on('error', console.log.bind(console, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('scss', function () {
  return gulp.src(['./src/scss/*.{sass,scss}', '!./src/scss/_*.{sass,scss}'])
    .pipe(plugins.plumber())
    .pipe(plugins.compass({
      css: './public/build',
      sass: './src/scss'
    }))
    .pipe(plugins.autoprefixer())
//    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./public/build'));
});

gulp.task('fileinclude', function () {
  gulp.src('./src/html/**/*.html')
    .pipe(plugins.fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['js', 'scss', 'fileinclude'], function () {
  dieOnError = false;

  browserSync.init([
    'public/**/*.css',
    'public/build/**/*.js',
    'public/*.html',
    'test/**/*.js'
  ], {
    server: {
      baseDir: '.'
    },
    startPath: '/public/margin.html',
    ghostMode: {
      scroll: false,
      links: false,
      forms: false
    }
  });

  gulp.watch('./src/scss/**/*.{sass,scss}', ['scss']);
  gulp.watch('./node_modules/lmn.jester.*/**/*.scss', ['scss']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch('./node_modules/lmn.jester.*/src/**/*.js', ['js']);
  gulp.watch(['./src/html/**/*.html'], ['fileinclude']);
});
