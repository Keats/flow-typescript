var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval",
  entry: ["webpack-hot-middleware/client", "./src/app/index.tsx"],
  output: {
    path: path.join(__dirname, "build"),
    filename: "app.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __PRODUCTION__: false,
    }),
    new HtmlWebpackPlugin({template: "src/index.html"})
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.ts(x?)$/,
      loader: "tslint",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.ts(x?)$/,
      loader: 'babel-loader!ts-loader',
      exclude: /node_modules/
    }]
  },
  tslint: {
    failOnHint: true,
    configuration: require('./tslint.json')
  }
};
