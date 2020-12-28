const { resolve } = require('path');

module.exports = {
  entry: {
    index: resolve(__dirname, '../src/index.ts'),
    vendor: resolve(__dirname, '../src/vendor.ts')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
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
