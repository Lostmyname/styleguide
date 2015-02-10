'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
// var browserSync = require('browser-sync');

global.dieOnError = true;
global.buildPath = './public/';
global.imagePath = '/images';
global.imageSrc = [
  './node_modules/lmn.jester.component.*/src/images/**/*.{png,jpg,gif}',
  './src/**/*.{png,jpg,gif}'
];

global.onError = function (err) {
  // browserSync.notify(err.message, 3000);
  this.emit('end'); // jshint ignore: line
};

function getTask(name) {
  return require('./gulp-tasks/' + name)(gulp, plugins);
}

gulp.task('auto-reload',       getTask('auto-reload'));
gulp.task('js',                getTask('js'));
gulp.task('scss',              getTask('scss'));
gulp.task('fonts',             getTask('fonts'));
gulp.task('responsive-images', getTask('responsive-images'));
gulp.task('optimise-svgs',     getTask('optimise-svgs'));
gulp.task('file-include',      getTask('file-include'));
gulp.task('deploy',            getTask('deploy'));

gulp.task('images',  ['responsive-images', 'optimise-svgs']);
gulp.task('build',   ['js', 'scss', 'images', 'fonts', 'file-include']);
gulp.task('default', ['build'], getTask('default'));
