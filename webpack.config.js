const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./client/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./client/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
