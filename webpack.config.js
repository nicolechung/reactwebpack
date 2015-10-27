var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css/, loader: ExtractTextPlugin.extract('css') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('!css!sass?sourceMap') }
    ]
  },
  sassLoader: {
    includePaths: [ path.resolve(__dirname, './sass')]
  },
  plugins: [
    new ExtractTextPlugin('css/app.css',{
            allChunks: true
        })
  ]
};
