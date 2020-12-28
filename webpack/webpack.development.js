const { resolve } = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello webpack!',
      template: './src/template.html',
      filename: 'index.html'
    })
  ]
});
