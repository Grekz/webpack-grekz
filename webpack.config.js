const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  hash: true,
  template: './src/index.html',
  filename: './index.html'
})
const md5Hash = new WebpackMd5Hash()
const cleanWebpackPlugin = new CleanWebpackPlugin('dist', {})
const jsJsxRule = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}
const htmlRule = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: { minimize: true }
    }
  ]
}

module.exports = {
  entry: {
    main: './src/index.js',
    second: './src/second.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [jsJsxRule, htmlRule]
  },
  plugins: [htmlPlugin, md5Hash, cleanWebpackPlugin],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
