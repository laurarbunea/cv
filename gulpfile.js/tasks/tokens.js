// gulpfile.js 
const config = require('../config');
const path = require('path');
const gulp = require('gulp');
const theo = require('gulp-theo');
 
// Transform design/props.yml to dist/props.scss: 
gulp.task('tokens:scss', () =>
  gulp.src(path.join( config.paths.tokens, '**', "*.yml" ))
    .pipe(theo.plugin({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest(config.paths.sass))
)