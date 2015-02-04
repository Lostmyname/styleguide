'use strict';

var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function (gulp, plugins) {
  return function () {
    var dest = buildPath + 'fonts/';

    gulp.src('./node_modules/lmn.jester.theme.*/src/base/font/**/*.{ttf,woff,eof,svg}')
      .pipe(plugins.rename({ dirname: '' }))
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  };
};
