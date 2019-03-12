var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var multiDest = require('gulp-multi-dest');
var nunjucksRender = require('gulp-nunjucks-render');
var cssnano = require('gulp-cssnano');
var include = require('gulp-include');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');

var babel = require('gulp-babel');
var babelify = require("babelify");
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var browserSync = require('browser-sync').create();
var buffer = require('vinyl-buffer');
var reload = browserSync.reload;

gulp.task('sass', function() {
    return gulp.src('./packages/scss/*.scss')
		.pipe(sass({
			style: 'compressed',
			errLogToConsole: true,
			onError: function(err) {
				return notify().write(err);
			}
		}))
		.pipe(sourcemaps.init())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(cssnano())
		.pipe(gulp.dest('../css/'))
        .pipe(reload({stream:true}));
}); 

gulp.task('default', ['sass'],function(){
    gulp.watch('./packages/scss/**/*', ['sass']);
    // gulp.watch('./package/js/**/*', ['js']);
});