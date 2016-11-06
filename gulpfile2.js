var gulp          = require('gulp');
var clean         = require('gulp-clean');
var concat        = require('gulp-concat');
var ngdocs        = require('gulp-ngdocs');
var sass          = require('gulp-sass');
var uglify        = require('gulp-uglify');
//var runSequence   = require('run-sequence');

var PATHS = {
  javascript: [ //yeta sab ko path deu yesari
    './vendor/js/jquery.smartmenus.bootstrap.js',
    './vendor/js/jquery.smartmenus.min.js',
    './vendor/js/jquery.min.js',
    './vendor/js/wow.min.js',
    './vendor/js/script.js',
    './vendor/js/bootstrap.min.js',
    './vendor/js/angular.min.js',
    './vendor/js/angular-route.min.js'
  ]
};

// Task 1

gulp.task('concatjs', function() {
  return gulp.src(PATHS.javascript)
    .pipe(concat('allcloudtheme.js'))
    .pipe(gulp.dest('./vendor'));
});

// Task 2
gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
});

// Task 3
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      })
      .on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('default', ['express', 'watch'], function() {

});






// var gulp          = require('gulp');
// var clean         = require('gulp-clean');
// var concat        = require('gulp-concat');
// var ngdocs        = require('gulp-ngdocs');
// var sass          = require('gulp-sass');
// var uglify        = require('gulp-uglify');
// var runSequence   = require('run-sequence');


// var buildDir    = 'bin/';
// var depsJS      = [
//             'vendor/js/jquery.smartmenus.bootstrap.js',
//             'vendor/js/jquery.smartmenus.min.js',
//             'vendor/js/jquery.min.js',
//             'vendor/js/wow.min.js',
//             'vendor/js/script.js',
//             'vendor/js/bootstrap.min.js',
//             'vendor/js/angular.min.js',
//             'vendor/js/angular-route.min.js'
//           ];

// var appJS       = [
//             'js/app.js',
//             'js/modules.js',
//             'js/configs.js' 
//           ];

// /** tasks **/
// gulp.task('devDeps', function ()
// {
//   var depsjs = gulp.src(depsJS);
//   return depsjs.pipe(concat('vendor/cloudtheme_deps.js'))
//     .pipe(gulp.dest('vendor'));
// });

// gulp.task('devJS', function ()
// {
//   var js = gulp.src(appJS);
//   return js.pipe(concat('vendor/cloudtheme.js'))
//     .pipe(gulp.dest('vendor'));
// });


