var gulp = require('gulp');
var jsonToSass = require('gulp-json-to-sass');
var sass = require('gulp-sass');

gulp.task('json', function () {
	return gulp.src('static_src/sass/**/*.scss')
		.pipe(jsonToSass({
            jsonPath: 'static_src/tokens/variables.json',
            scssPath: 'static_src/sass/settings/variables.scss'
        }))
        .pipe(sass())
		.pipe(gulp.dest('dist/css'));
});