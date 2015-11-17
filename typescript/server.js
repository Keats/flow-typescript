var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    exclude: ['node_modules'],
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  if (req.url.slice(-3) === "css") {
    res.type("css");
    res.sendFile(path.join(__dirname, 'build', 'app.css'));
  } else {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
