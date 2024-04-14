const path = require('path')

const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

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
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/dist/index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'app/build'),
    },
    port: 3000,
  },
}
