'use strict';

// Run this when you're working on the Gulpfile. Otherwise, do not use.
module.exports = function (gulp, plugins) {
  return function () {
    var rev = require('gulp-rev');

    return gulp.src(buildPath + 'images-test/**/*.png')
      .pipe(plugins.rev())
      .pipe(plugins.rev.manifest('rev-manifest.json'))
      .pipe(gulp.dest(buildPath + 'images-test'));
  }
};
