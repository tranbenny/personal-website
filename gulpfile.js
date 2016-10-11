var gulp = require('gulp');
var shell = require('gulp-shell');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
// var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
// var DashboardPlugin = require('webpack-dashboard/plugin');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('server', ['webpack:build-dev', 'html-templates', 'copy-assets'], function() {
	browserSync.init({
		server: {
			baseDir: './dist'
		},
		port: 9000
	});
});

gulp.task('webpack:build-dev', ['js-lint'], function() {
	return gulp.src(['./src/app.js', './src/vendor.js'])
		.pipe(webpack(webpackConfig, null, function(err, stats) {
			if (err) throw new gutil.PluginError('webpack', err);
		}))
		.on('error', function(error) {
			gutil.log(error.message); 
			this.emit('end');
		})
		.pipe(gulp.dest('dist/'));
});

gulp.task('watch-changes', function() {
	gulp.watch(["src/**/*"], ['reload-changes']);
});

gulp.task('reload-changes', ['webpack:build-dev'], function() {
	reload();
});

gulp.task('js-lint', function() {
	// TODO: SET UP CODE LINTING
});

// COPY ALL OTHER TEMPLATES 
gulp.task('html-templates', function() {
	return gulp.src(['./src/index.html'])
		.pipe(gulp.dest('dist/'));
});

gulp.task('watch-assets', function() {
	gulp.watch("src/assets/**/*", ['copy-assets']);
});

gulp.task('copy-assets', function() {
	return gulp.src('./src/assets/**/*')
		.pipe(gulp.dest('dist/assets'));
});

gulp.task('test', shell.task([
	'karma start'
]));


gulp.task('default', ['server', 'watch-changes']);