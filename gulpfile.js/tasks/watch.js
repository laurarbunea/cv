const gulp = require('gulp');
const path = require('path');
const bs = require('browser-sync').create('main');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('../../webpack/webpack.config.dev');

gulp.task('watch', ['build'], function() {
    webpackConfig.watch = true;

    bs.init({
        open: false,
        notify: false,
        server: config.paths.www,
    }, function() {
        webpack(webpackConfig).watch({}, (err, stats) => {
            const hasErrors = err || stats.hasErrors();
            if (err) {
                console.error(err.stack || err);

                if (err.details) {
                    console.error(err.details);
                }
            } else {
                console.log(stats.toString(webpackConfig.stats));

                if (!hasErrors && bs.active) {
                    bs.reload(path.join(webpackConfig.output.path, '**', '*.js'));
                }
            }
        });
    });

    const contentReload = [
        'wrangler.yaml',
        path.join(config.paths.content, '**', '*.{yml,json,md}'),
        path.join(config.paths.templates, '**', '*.j2'),
    ];

    gulp.watch(contentReload, ['content']);
    gulp.watch(path.join(config.paths.tokens, '**', '*.json'), ['css'])
    gulp.watch(path.join(config.paths.svg, '**', '*.svg'), ['svg']);
    gulp.watch(path.join(config.paths.sass, '**', '*.scss'), ['css']);
});
