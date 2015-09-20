var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  devtool: "source-map",
  entry: [
    "./src/app/index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __PRODUCTION__: true,
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
  })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel?optional[]=runtime&stage=1"],
        exclude: /node_modules/
      }
    ]
  }
};
