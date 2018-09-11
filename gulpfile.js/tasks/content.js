const path = require('path');
const gulp = require('gulp');
const shell = require('gulp-shell');
const bs = require('browser-sync').get('main');
const config = require('../config');

const options = {
    ignoreErrors: !config.prod,
};

gulp.task('content', ['svg'], () => {
    return gulp.src('wrangler.yaml', {read: false})
        .pipe(shell([
            `wrangler build ${config.paths.content} ${config.paths.www} --force`,
        ], options))
        .pipe(bs.stream());
});
