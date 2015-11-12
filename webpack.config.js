'use strict'

module.exports = {
  entry: {
    app: './public/app.jsx'
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
      }
    ]
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  }
}
