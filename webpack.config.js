const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/dist/js/app.js',
  output: {
    path: path.resolve(__dirname, 'app/build'),
    filename: 'app.bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './app/dist/index.html',
      hash: true,
    }),
  ],
}
