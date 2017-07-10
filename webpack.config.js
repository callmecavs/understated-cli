'use strict'

const HTMLWebpackPlugin = require('html-webpack-plugin')

const isDev = !process.argv.includes('-p')

const config = {
  context: __dirname + '/src',

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ],
            plugins: [
              ['transform-react-jsx', { pragma: 'h' }],
              'transform-object-rest-spread'
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ],

  cache: isDev,

  devtool: isDev ? 'cheap-module-eval-source-map' : false,

  devServer: {
    contentBase: __dirname + '/dist',
    port: 3000
  },

  target: 'web'
}

module.exports = config
