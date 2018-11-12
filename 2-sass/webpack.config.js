const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    output: ['css-hot-loader/hotModuleReplacement', path.resolve(__dirname, 'src/server.js')]
  },
  mode: 'development',
  target: 'node',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader : 'css-loader',
            options : {
              minimize : true
            }
          }
        ]
      }))
    }, {
      test: /\.scss$/,
      use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-hot-loader',
          {
            loader : 'css-loader',
            options : {
              minimize : true
            }
          },
          'sass-loader'
        ]
      }))
    }, {
      test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
      use: [ 'url-loader' ]
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/index.html',
      to: path.join(__dirname, 'dist')
    }]),
    new ExtractTextPlugin('style.css')
  ]
};
