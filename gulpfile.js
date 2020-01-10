const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

gulp.task('default', () => {
    gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css'));
});