var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/app/index"
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "app.js",
    publicPath: "/build/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __PRODUCTION__: false,
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
        loader: "babel",
        exclude: /node_modules/,
        query: {
          optional: ["runtime"],
          stage: 1,
          plugins: ["react-transform"],
          extra: {
            "react-transform": [{
              target: "react-transform-webpack-hmr",
              imports: ["react"],
              locals: ["module"]
            }]
          }
        }
      }
    ]
  }
};
