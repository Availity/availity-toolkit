var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NGAnnotatePlugin  = require('ng-annotate-webpack-plugin');

var config = require('./config');

var DEBUG = true;

var config = {
  context: path.join(config.project.path, 'src'),
  entry: {
    app: 'app.js',
    vendor: ['vendor']
  },
  output: {
    path: path.join(config.project.path, 'build'),
    filename: '[name]-[hash].js',
    hash: true,
    pathinfo: DEBUG
  },
  debug: DEBUG,
  cache: DEBUG,
  watch: DEBUG,
  devtool: 'eval',
  noParse: [
    /bower_components/
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
      {test: /\.html$/, loader: 'html'}

    ]
  },
  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      _: 'lodash'
    }),

    new NGAnnotatePlugin({
      add: true
    }),

    new HtmlWebpackPlugin({ template: 'src/index.html' }),

    new BowerWebpackPlugin({
      excludes:  [
        /.*\.(less|map)/,
        /glyphicons-.*\.(eot|svg|ttf|woff)/,
        /bootstrap.*\.css/,
        /select2.*\.css/
      ]
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    // Use bundle name for extracting bundle css
    new ExtractTextPlugin('css/[name].css', {
      allChunks: true
    })
  ]
};

module.exports = config;
