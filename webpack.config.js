const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



const PATHS = {
  app: './src/index.jsx',
  html: './src/index.html',
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html,
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: PATHS.dist,
  },
  eslint: {
    emitWarning: true,
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
    test: /\.(css)$/,
    loader: ExtractTextPlugin.extract(
        'style', // backup loader when not building .css file
        'css' // loaders to preprocess CSS
    )
    }, {
      test: /\.html$|\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: 'file?name=[name].[ext]',
    }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};
