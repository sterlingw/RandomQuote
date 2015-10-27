var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function(){
    browserify('extension/js/app.js', {debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('extension/js/'));
});

gulp.task('watch', function(){
    gulp.watch('extension/js/*.js', ['build']);
});
