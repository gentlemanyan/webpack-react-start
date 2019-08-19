const path = require('path');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx',
  ],
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
  },
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    modules: [path.resolve('src'), path.resolve('node_modules')]
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ],
        include: path.resolve('src'),
        exclude: path.resolve('node_modules')
      }
    ]
  },
  plugins: [
    /**
     * typescript 类型检查插件
     */
    new ForkTsCheckerPlugin({ tslint: true }),
    new ForkTsCheckerNotifierPlugin({ excludeWarnings: false }),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '127.0.0.1',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true
  }
}

