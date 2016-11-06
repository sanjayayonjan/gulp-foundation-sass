var gulp = require('gulp');
var sass = require('gulp-sass');


/*===============
//express //
===============*/

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
});

/*===============
//GULP SASS //
===============*/

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss') // YESMA scss ko source deu hai
    	.pipe(sass({
    		outputStyle: 'expanded' //yo expanxed ma cha hai yesko ni 2-3 ta tarika cha compact garne ki kasto
    	})
    	.on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['styles']);//scss source locat
});

gulp.task('default', ['express', 'watch'], function() {

});
