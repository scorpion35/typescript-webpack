const { resolve } = require('path');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, '../build')
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Hello webpack!',
      template: './src/template.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract CSS into files
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
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  }
});
