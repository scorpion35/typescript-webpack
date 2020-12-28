const { resolve } = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          "sass-loader" // 1. Turns SASS into CSS
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello webpack!',
      template: './src/template.html',
      filename: 'index.html'
    })
  ]
});
