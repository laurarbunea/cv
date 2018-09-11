const gulp = require('gulp');
const theo = require('gulp-theo');

require('./tasks/watch');
require('./tasks/content');
require('./tasks/css');
require('./tasks/svg');
require('./tasks/js');
//require('./tasks/tokens');
//require('./tasks/json');

gulp.task('build', ['css', 'js', 'content']);
gulp.task('default', ['build']);
