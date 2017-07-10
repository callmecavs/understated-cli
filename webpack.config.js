'use strict'

const isDev = !process.argv.includes('-p')

const config = {
  context: __dirname + '/src',

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },

  cache: isDev,

  devtool: isDev ? 'cheap-module-eval-source-map' : false,

  devServer: {
    port: 3000
  }

  target: 'web'
}

module.exports = config
