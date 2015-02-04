'use strict';

module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src('./src/html/**/*.html')
      .pipe(plugins.fileInclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./public'));
  };
};
