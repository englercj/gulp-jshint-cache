
Gulp task for linting.

Usage:
```
var gulpTaskLint = require('javascript-gulp-task-lint');
gulp.task('lint', gulpTaskLint(['**/*.js', '!node_modules/**', '!app/**', '!tutorial/**']));
```

In `jshintrc` you can find `.jshintrc` for the project and for mocha tests.