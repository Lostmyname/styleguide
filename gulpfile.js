'use strict';

var path = require('path');
var gulp = require('gulp');
var _ = require('lodash');
var findModulesDown = require('find-node-modules-down');
var getLmnTask = require('lmn-gulp-tasks');
var argv = require('yargs').argv;

var buildRoot = process.env.MERMAID_BUILD_ROOT || '.';
var assetPath = process.env.MERMAID_ASSET_PATH || 'assets';
var buildPath = path.resolve(path.join(buildRoot, 'public', assetPath));
var imageCache = path.join(buildPath, 'src_cache');
var testMode = process.env.RAILS_ENV === 'test';


var assetHost;
if (process.env.ASSET_HOST) {
  assetHost = 'https://' + process.env.ASSET_HOST + '/';
} else {
  assetHost = '/';
}

function getTask(name, options) {
  if (typeof options !== 'object') {
    options = {};
  }

  if (typeof options.rev !== 'boolean') {
    options.rev = true;
  }

  options.manifest = buildPath;

  return getLmnTask(name, options);
}

var jsOpts = {
  src: './src/script.js',
  dest: path.join(buildPath, 'js/bundle.js')
};
var jsOptsWatch = _.assign({}, jsOpts, { watch: true });

gulp.task('js', getTask('browserify', jsOpts));
gulp.task('js-watch', getTask('browserify', jsOptsWatch));

gulp.task('js-quality', getTask('js-quality', {
  src: ['./src/**/*.js', '!./src/**/*.min.js', 'gulpfile.js', 'public/*.js']
}));

var scssFiles = ['./src/styles.scss'];


gulp.task('scss', getTask('scss', {
  src: scssFiles,
  dest: path.join(buildPath, 'stylesheets'),
  imagePath: assetHost + path.join(assetPath, 'images'),
  includePaths: findModulesDown()
}));

gulp.task('fonts', getTask('copy', {
  src: './src/themes/**/*.{ttf,woff,eot,svg}',
  dest: path.join(buildPath, 'fonts'),
  flatten: true
}));

gulp.task('src-copy', getTask('copy', {
  src: './src/**/*.{png,jpg,gif}',
  dest: imageCache,
  rev: false
}));

gulp.task('responsive-images', gulp.series('src-copy', getTask('responsive-images', {
  src: [
    './node_modules/lmn.jester.component.*/src/images/**/*.{png,jpg,gif}',
    './node_modules/lmn-monkey/src/**/*.{png,jpg,gif}',
    path.join(imageCache, '**/*.{png,jpg,gif}'),
    '!' + path.join(imageCache, 'components/garousel/**/*.jpg')
  ],
  dest: path.join(buildPath, 'images'),
  lossless: function (file) {
    return file.path.indexOf('hero') !== -1;
  },
  flatten: true,
  skipOptimize: testMode,
  skipResize: testMode
})));

gulp.task('optimise-svgs', getTask('optimise-svgs', {
  src: [
    './node_modules/lmn.jester.component.*/src/images/**/*.svg',
    './node_modules/lmn-monkey/src/imgs/**/*.svg',
    './src/components/**/*.svg',
    './src/images/**/*.svg',
    './src/experiments/**/*.svg'
  ],
  dest: path.join(buildPath, 'images'),
  flatten: true
}));

gulp.task('icons', getTask('copy', {
  src: './src/icons/*.{ico,png}',
  dest: path.join(buildPath, 'images')
}));

// import images from intl-tel-input lib
gulp.task('import-npm-package-images', getTask('copy', {
  src: './node_modules/intl-tel-input/build/img/*.{png,jpg,gif}',
  dest: path.join(buildPath, 'images')
}));

gulp.task('clean', getTask('clean', {
  src: [buildPath, 'rev-manifest.json']
}));

gulp.task('watchers', gulp.series('js-watch', function () {
  gulp.watch('./src/**/*.{sass,scss}', gulp.series('scss'));
  gulp.watch('./node_modules/lmn.jester.*/**/*.scss', gulp.series('scss'));

  var browserSync = require('browser-sync');

  var files = [
    'stylesheets/*.css',
    'js/*.js',
    'images/*.{png,jpg,gif,svg}'
  ].map(function (glob) {
    return path.join(buildPath, glob);
  });

  browserSync.init(files, {
    server: path.join('./public')
  });
}));

gulp.task('images', gulp.parallel(
  'responsive-images', 'optimise-svgs', 'icons', 'import-npm-package-images'
));
gulp.task('lint', gulp.series('js-quality'));
gulp.task('build', gulp.series(
  gulp.parallel('images', 'fonts', 'js'),
  'scss'
));

gulp.task('default', gulp.series('lint', 'build', 'watchers'));
