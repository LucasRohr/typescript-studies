const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './app/dist/js/app.js',
  output: {
    path: path.resolve(__dirname, 'app/build'),
    filename: 'app.bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './app/dist/index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}
