'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
 
gulp.task('default', ['sass', 'scripts']);

gulp.task('sass', function () {
  return gulp.src('./src/pageguide.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function() {
  return gulp.src('./src/pageguide.js')
    .pipe(uglify({ mangle: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
});