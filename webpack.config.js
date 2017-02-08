const path = require("path");

const config = {
    entry: "./src/js/scripts.js",
    output: {
        path: path.resolve(__dirname, "src/temp/js"),
        filename: "scripts.js"
    },
    module: {
        rules: [{
            use: ["babel-loader", "eslint-loader"],
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}

module.exports = config;
