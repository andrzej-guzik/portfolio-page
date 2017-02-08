var gulp = require("gulp");

require("require-dir")("./gulp")

gulp.task("default", gulp.series("dev", gulp.parallel("server", "watch")));
