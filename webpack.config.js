const path = require("path");
const webpack = require("webpack");

const VENDOR_LIBS = [ "axios", "jquery" , "form-serialize", "jquery-smooth-scroll", "picturefill", "slick-carousel", "validator", "tether"];

const config = {
	entry: {
		scripts: "./src/js/scripts.js",
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.resolve(__dirname, "src/temp/js"),
		filename: "[name].js"
	},
	module: {
		rules: [{
			use: ["babel-loader", "eslint-loader"],
			test: /\.js$/,
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ["vendor"]
		})
	]
};

module.exports = config;
