var config = {
	src: "./src",
	build: {
		dest: "./docs",
		styles: "./docs/css",
		scripts: "./docs/js",
		images: "./docs/assets/images",
		fonts: "./docs/assets/fonts"
	},
	styles: {
		src: "./src/scss/styles.scss",
		dest: "./src/css",
		srcDir: "./src/scss/**/*.scss",
	},
	scripts: {
		src: "./src/js/scripts.js",
		dest: "./src/temp/js",
		srcDir: "./src/js/**/*.js",
	},
	fonts: {
		src: "./src/assets/fonts/**/*"
	},
	images: {
		src: "./src/assets/images/**/*"
	},
	server: {
		notify: false,
		server: {
			baseDir: "src"
		},
		files:[
			"./src/temp/js",
			"./src/css/**/*.css",
			"./src/index.html"
		]
	}
};

module.exports = config;
