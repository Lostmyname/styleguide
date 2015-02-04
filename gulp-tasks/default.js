'use strict';

module.exports = function (gulp) {
  return function () {
    var browserSync = require('browser-sync');

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

    global.dieOnError = false;

    gulp.watch('./src/scss/**/*.{sass,scss}', ['scss']);
    gulp.watch('./node_modules/lmn.jester.*/**/*.scss', ['scss']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch(['./src/html/**/*.html'], ['file-include']);
  };
};
