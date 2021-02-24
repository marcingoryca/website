var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Compile SASS into CSS and auto-inject into browser
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
           .pipe(sass())
           .pipe(gulp.dest("src/css"))
           .pipe(browserSync.stream());
});

//Move the javascript files into src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dis/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
           .pipe(gulp.dest("src/js"))
           .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'js']);
