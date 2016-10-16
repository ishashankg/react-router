var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

gulp.task('transform', function(){
	return browserify('./source/index.js')
			.transform(babelify.configure({
				presets:['react', "es2015"]
			}))
			.bundle()
			.pipe(source('main.js'))
			.pipe(streamify(uglify()))
			.pipe(gulp.dest('./build/'));
});

gulp.task('copy-html',['transform'], function(){
		gulp.src('./source/index.html')
		.pipe(gulp.dest('./build/'));
});

gulp.task('copy-css',['copy-html'], function(){
		gulp.src('./source/styles.css')
		.pipe(gulp.dest('./build/'));
});

gulp.task('default',['copy-css']);
