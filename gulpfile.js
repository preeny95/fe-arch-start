'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

// Build sass
// -------------------------------------------------------------------------------
gulp.task('sass', function () {
    return gulp.src('assets/styles/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/styles/'))
        .pipe(livereload());
});


// Copy assets to site
// -------------------------------------------------------------------------------
gulp.task('copy', function() {
    gulp.src([
        './node_modules/font-awesome/css/*',
        './node_modules/font-awesome/fonts/*'
    ], {'base' : './node_modules'})
        .pipe(gulp.dest('./assets/fonts/'));
});


// Watch for updates
// -------------------------------------------------------------------------------
gulp.task('watch', function () {

    livereload.listen();
    gulp.watch('assets/styles/scss/**/*.scss' , ['sass']);
});


// Default: Build all the things!
// -------------------------------------------------------------------------------
gulp.task('default', function() {
    gulp.start('sass', 'copy', 'watch');
});
