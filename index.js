var gulp = require('gulp');
var gutil = require('gulp-util');
var map = require('map-stream');
var jshint = require('gulp-jshint');
var fs = require('fs');

var exitCode = 0;

module.exports = function(src) {
  var totalLintErrors = null;

  return function() {

    return gulp.src(src)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(map(function(file, cb) {
        if (!file.jshint.success) {
          totalLintErrors += file.jshint.results.length;
          exitCode = 1;
        }
        cb(null, file);
      }))
      .on('end', function() {
        var errString = totalLintErrors + '';
        if (exitCode) {
          console.log(gutil.colors.magenta(errString), 'errors\n');
          gutil.beep();
        }
        if (exitCode) {
          process.emit('lint-fail');
        }
      });
  }
}



process.on('lint-fail', function() {
  process.nextTick(function() {
    var msg = "gulp '" + gulp.seq + "' failed";
    console.log(gutil.colors.red(msg));
    process.exit(exitCode);
  });
});