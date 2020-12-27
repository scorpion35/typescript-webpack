const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HTMLWebpackPlugin } = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello webpack!',
      template: './src/index.html',
      filename: 'index.[contenthash].html'
    })
  ],
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          "style-loader", // 3. Injects styles into dom
          "css-loader",   // 2. Turns CSS into commonjs
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          "sass-loader"   // 1. Turns SASS into CSS
        ]
      },
      {
        test: /.tsx?$/,
        use: "ts-loader"
      }
    ]
  }
}
