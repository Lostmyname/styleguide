'use strict';

var s3 = require("gulp-s3");
var fs = require("fs");

module.exports = function (gulp) {
  return function () {
    var aws = JSON.parse(fs.readFileSync('./aws.json'));

    return gulp.src('./public/**')
           .pipe(s3(aws));
  };
};
