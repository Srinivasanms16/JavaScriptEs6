const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundel.js",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /\.worker\.js$/,
        loader: ["worker-loader"]
      }
    ]
  },
  plugins: [new htmlwebpackplugin({ template: "./src/index.html" })]
};
