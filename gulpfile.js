const gulp = require('gulp');
const minifyJS = require('gulp-minify');
const concat = require('gulp-concat');
gulp.task('build', function () {
    gulp.src('./src/**/*.js').pipe(minifyJS({
        ext: {
            min: '.js'
        },
        noSource: true
    })).pipe(concat('avalon-front-end-infrastructure.js')).pipe(gulp.dest('./min/'));
});