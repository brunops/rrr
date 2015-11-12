'use strict'

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var plugins = [
  new ExtractTextPlugin('[name].css')
];

module.exports = {
  entry: {
    app: [ './public/js/app.jsx', './public/css/app.less' ]
  },

  output: {
    path: 'dist',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'style!css')
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!less')
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/, loader: 'file'
      },
      {
        test: /\.eot$/, loader: 'file'
      },
      {
        test: /\.svg$/, loader: 'file'
      }
    ]
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },

  plugins: plugins
}
