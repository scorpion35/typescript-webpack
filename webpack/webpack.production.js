const { resolve } = require('path');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: 'index.[contenthash].js',
    path: resolve(__dirname, '../build')
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Hello webpack!',
      template: './src/template.html',
      filename: 'index.[contenthash].html'
    })
  ]
});
