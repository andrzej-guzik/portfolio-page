var gulp = require("gulp"),
	config = require("./config"),
	pngquant = require("imagemin-pngquant"),
	del = require("del"),
	$ = require("gulp-load-plugins")();

gulp.task("build:styles", function() {
	return gulp.src(config.styles.src)
		.pipe($.sass({outputStyle: "compressed"}).on("Sass compiling error: ", $.sass.logError))
		.pipe($.base64({
			extensions: ['svg', 'png']
		}))
		.pipe($.autoprefixer({
			browsers: ["> 0%"],
			cascade: false
		}))
		.pipe(gulp.dest(config.styles.dest));
});

gulp.task("clearBuild", function() {
	return del(config.build.dest);
});

gulp.task("optimizeImages", function() {
	return gulp.src(config.images.src)
      .pipe($.imagemin({
		  progressive: true,
		  optimizationLevel: 1,
		  use: [pngquant()]
      }))
      .pipe(gulp.dest(config.build.images));
});

gulp.task("usemin", function() {
	return gulp.src("./src/*.html")
		.pipe($.usemin({
			css: [  $.rev() ],
			js1: [ $.uglify(), $.rev() ],
			js2: [ $.uglify(), $.rev() ],
			html: [ $.htmlmin({collapseWhitespace: true}) ]
		}))
		.pipe(gulp.dest(config.build.dest));
});

gulp.task("build", gulp.series("clearBuild", "optimizeImages", "build:styles", "usemin"));
