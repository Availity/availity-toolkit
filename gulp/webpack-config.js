var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');

var config = require('./config');

// var DEBUG = config.args.environment === 'development';
var DEBUG = true;

var config = {
  output: {
    path: path.join(config.project.path,  'build'),
    filename: '[name].js',
    chunkFilename: '[name]-[id]-bundle.js',
    pathinfo: DEBUG,
  },
  debug: DEBUG,
  cache: DEBUG,
  watch: DEBUG,
  devtool: '#eval-source-map',
  noParse: [
    /select2.*\.js/,
    /.*angular.*\.js/,
    /.*lodash.*\.js/,
    /.*moment.*\.js/,
    /.*bootstrap.*\.js/,
    /.*velocity.*\.js/,
  ],
  resolve: {
    root: [path.join(config.project.path, '/src')],
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ['', '.js', '.json']
  },
  module:  {
    loaders: [
      { test: /[\\\/]angular\.js$/, loader: 'expose?angular!exports?angular' }, // export angular so we can do `var angular = require('angular')`
      { test: /[\\\/]jquery\.js$/, loader: 'expose?$!expose?jQuery' }, // export jQuery and $ to global scope.
      { test: /[\\\/]lodash\.js$/, loader: 'expose?_' }, // export jQuery and $ to global scope.
      { test: /[\\\/]moment\.js$/, loader: 'expose?moment' },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap', { publicPath: '../' } ) },
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader?sourceMap') },

      {
        // test should match the following:
        //
        //  '../fonts/availity-font.eot?18704236'
        //  '../fonts/availity-font.eot'
        //
        test: /\.(ttf|woff|eot|svg).*/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {test:/\.(\.jpe?g|png|gif)$/, loader: 'file?name=images/[name].[ext]'},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]'} ]
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

    new BowerWebpackPlugin({
      excludes:  [
        /.*\.(less|map)/,
        /glyphicons-.*\.(eot|svg|ttf|woff)/,
        /bootstrap.*\.css/,
        /select2.*\.css/
      ]
    }),

    // Use bundle name for extracting bundle css
    new ExtractTextPlugin('css/[name].css', {
      allChunks: true
    })
  ]
};

module.exports = config;
