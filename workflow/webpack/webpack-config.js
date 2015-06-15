var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pkg = require('../../package.json');

var config = require('../config');
var utils = require('./utils');

var config = {
  context: path.join(config.project.path, 'project/app'),
  entry: {
    index: utils.entry(),
    vendor: ['vendor']
  },
  output: {
    path: utils.output(),
    filename: utils.fileName(),
    hash: utils.isProduction(),
    pathinfo: utils.isDevelopment()
  },

  // devtool: "source-map" cannot cache SourceMaps for modules and need to regenerate complete SourceMap for the chunk. It’s something for production…
  // devtool: "eval-source-map" is really as good as devtool: "source-map", but can cache SourceMaps for modules. It’s much faster for rebuilds.
  // devtool: "eval-cheap-module-source-map" offers SourceMaps that only maps lines (no column mappings) and are much faster.
  // devtool: "eval-cheap-source-map" is similar but doesn’t generate SourceMaps for modules (i. e. jsx to js mappings).
  //
  // The best performance has devtool: "eval", but it only maps to compiled source code per module. In many cases this is good enough. Hint: combine it with output.pathinfo: true.
  // The UglifyJsPlugin uses SourceMaps to map errors to source code. And SourceMaps are slow. As you should only use this in production this is fine. If your production build is really slow (or doesn’t finish at all) you can disable it with new UglifyJsPlugin({ sourceMap: false }).
  devtool: utils.maps(),
  debug: utils.isDevelopment(),
  cache: utils.isDevelopment(),
  watch: utils.isDevelopment(),
  noParse: [
    /.*bower_components.*/
  ],
  resolve: {
    root: [path.join(config.project.path, '/project/app')],
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ['', '.js', '.json']
  },
  module:  {
    loaders: [
      { test: /[\\\/]angular\.js$/, loader: 'expose?angular!exports?angular' }, // export angular so we can do `var angular = require('angular')`
      { test: /[\\\/]jquery\.js$/, loader: 'expose?$!expose?jQuery' }, // export jQuery and $ to global scope.
      { test: /[\\\/]lodash\.js$/, loader: 'expose?_' }, // export jQuery and $ to global scope.
      { test: /[\\\/]moment\.js$/, loader: 'expose?moment' },
      { test: /\.css$/,
          loader: ExtractTextPlugin.extract(
            'style-loader',
            'css-loader',
            {
              publicPath: "../"
            }
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
      {test:/\.(\.jpe?g|png|gif)$/, loader: 'file?name=images/[name].[ext]'},
      {test: /\.html$/, loader: 'html'}

    ]
  },
  plugins: [

    // ignore all the moment local files
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new BowerWebpackPlugin({
      excludes:  [
        /.*\.(less|map)/,
        /glyphicons-.*\.(eot|svg|ttf|woff)/,
        /bootstrap.*\.css/,
        /select2.*\.(png|gif|css)/
      ]
    }),

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

    new HtmlWebpackPlugin({
      template: 'project/app/index.html',
      favicon: 'project/app/favicon.ico',
      pkg: pkg
    }),

    // Use bundle name for extracting bundle css
    new ExtractTextPlugin('css/[name].css', {
      allChunks: true
    }),

    function() {
      this.plugin("done", function(stats) {
        require("fs").writeFileSync(
          path.join(__dirname, "stats.json"),
          JSON.stringify(stats.toJson())
        );
      }
    );
    }
  ]
};

if(utils.isProduction()) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        drop_console: true
      },
      output: { comments: false }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  );
}

module.exports = config;
