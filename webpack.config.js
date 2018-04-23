const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelLoader = {
  loader: 'babel-loader',
  options: { sourceMap: true }
};

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    filename: 'bundle.js',
    compress: false,
    port: 9001,
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: '/views/index.html' }]
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoader]
      },
      {
        test: /\.scss|css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('slds-paginator.css')]
};

module.exports = config;
