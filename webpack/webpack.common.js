const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, '../src/index.ts'),
  devtool: 'inline-source-map',
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
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /.(svg|png|jpe?g|gif)$/,
        exclude: [/node_modules/, /\.html$/],
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "assets",
            publicPath: "assets"
          }
        }
      }
    ]
  }
};
