var gulp = require("gulp"),
	browserSync = require("browser-sync").create(),
	config = require("./config");

	gulp.task("server", function() {
		browserSync.init(config.server);
	});

	gulp.task("watch:styles", function() {
		return gulp.watch(config.styles.srcDir, gulp.series("dev:styles"));
	});

	gulp.task("watch:scripts", function() {
		return gulp.watch(config.scripts.srcDir, gulp.series("dev:scripts"));
	});

	gulp.task("watch", gulp.parallel("watch:styles", "watch:scripts"));
