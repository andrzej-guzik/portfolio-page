var gulp = require("gulp"),
	config = require("./config"),
	webpack = require("webpack"),
	configWebpack = require("../webpack.config.js"),
	$ = require("gulp-load-plugins")();

gulp.task("dev:styles", function() {
	return gulp.src(config.styles.src)
		.pipe($.sourcemaps.init())
		.pipe($.plumber())
		.pipe($.sass({outputStyle: "expanded"}).on("Sass compiling error: ", $.sass.logError))
		.pipe($.autoprefixer({
			browsers: ["> 0%"],
			cascade: false
		}))
		.pipe($.sourcemaps.write())
		.pipe($.size())
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task("dev:scripts", function(callback) {
	webpack(configWebpack, function(err, stats) {
		if(err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});

gulp.task("dev", gulp.parallel("dev:styles", "dev:scripts"));
