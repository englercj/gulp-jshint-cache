
# Deprecated

Gulp task for linting which makes process exit with non-zero status on fail.

Can be used with git pre-commit hook to deny bad javascript.

Usage:
```
var gulpTaskLint = require('javascript-gulp-task-lint');
gulp.task('lint', gulpTaskLint(['**/*.js', '!node_modules/**', '!app/**', '!tutorial/**']));
```

In `jshintrc` you can find `.jshintrc` for the project and for mocha + should.js tests.