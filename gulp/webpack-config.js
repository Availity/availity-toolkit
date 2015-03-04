var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');

var config = require('./config');

var appRoot = path.join(config.project.path, '/src');

var DEBUG = config.args.environment === 'development';

var config = {
  output: {
    filename: '[name].js',
    pathinfo: DEBUG
  },
  debug: DEBUG,
  cache: DEBUG,
  watch: DEBUG,
  devtool: 'source-map',
  noParse: [
    /select2.*\.js/,
    /.*angular.*\.js/
  ],
  resolve: {
    root: [appRoot],
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: [
      '',
      '.js',
      '.json'
    ]
  },

  module:  {
    loaders: [

      // Shims for for libs that are not CommonJs or AMD.
      { test: /[\\\/]angular\.js$/, loader: 'expose?angular!exports?angular' }, // export angular so we can do `var angular = require('angular')`

      { test: /[\\\/]jquery\.js$/, loader: 'expose?$!expose?jQuery' }, // export jQuery and $ to global scope.

      { test: /[\\\/]lodash\.js$/, loader: 'expose?_' }, // export jQuery and $ to global scope.

      { test: /[\\\/]moment\.js$/, loader: 'expose?moment' },

      // Extract related CSS for each bundle
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader',
          { publicPath: '../' }
        )
      },
      {
        // test should match the following:
        //
        //  '../fonts/availity-font.eot?18704236'
        //  '../fonts/availity-font.eot'
        //
        test: /\.(ttf|woff|eot|svg).*/,
        loader: 'file?name=fonts/[name].[ext]'
      },

      {
        test:/\.(\.jpe?g|png|gif)$/,
        loader: 'file?name=images/[name].[ext]'
      },

      {
        test: /\.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]'
      }
    ]
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    // Look in bower main files.
    new BowerWebpackPlugin({
      excludes:  [
        /.*\.(less|map)/,
        /glyphicons-.*\.(eot|svg|ttf|woff)/,
        /bootstrap.*\.css/,
        /select2.*\.css/
      ]
    }),

    // Use bundle name for extracting bundle css
    new ExtractTextPlugin('css/[name].css')
  ]
};

module.exports = config;
