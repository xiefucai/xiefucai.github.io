var webpack = require('webpack');
module.exports = {
  entry: {
    editor: __dirname+'/src/editor.js'
  },
  output: {
    path: __dirname + '/build',
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
