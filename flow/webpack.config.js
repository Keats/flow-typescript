var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  devtool: "eval",
  entry: [
    "webpack-hot-middleware/client",
    "./src/app/index",
  ],
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
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
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
          include: path.join(__dirname, 'src'),
          query: {
            stage: 1,
            env: {
              // only enable it when process.env.NODE_ENV is 'development' or undefined
              development: {
                plugins: ["react-transform"],
                extra: {
                  // must be defined and be an object
                  "react-transform": {
                    transforms: [{
                      transform: "react-transform-hmr",
                      // if you use React Native, pass "react-native" instead:
                      imports: ["react"],
                      // this is important for Webpack HMR:
                      locals: ["module"]
                    }]
                  }
                }
              }
            }
          }
        }
      ]
  }
};
