var path = require('path');
var argv = require('minimist')(process.argv.slice(2));

module.exports = {
  args: {
    verbose: !!argv.verbose,
    environment: process.env.NODE_ENV || 'development'
  },
  project: {
    path: path.resolve(__dirname, '..')
  },
  readme: {
    src: ['docs/readme/readme.config.md'],
    name: 'README.md',
    dest: './'
  },
  bower: {
    src: path.join(__dirname, '..', 'bower_components')
  },
  js: {
    src: ['gulpfile.js', 'gulp/**/*.js', 'src/**/*.js']
  },
  less: {
    src: 'src/app.less',
    targets: 'src/**/*.less',
    dest: 'build/css',
    destMaps: './maps', // relative to dest folder
    browsers: [
      '> 1%',
      'last 3 versions',
      'ie 8', 'ie 9'
    ]
  },
  css: {
    src: 'css/**/*.css'
  },
  app: {
    src: 'src/app.js',
    dest: './build' // webpack requires absolute paths
  },
  vendor: {
    src: 'src/vendor.js',
    dest: './build'
  },
  markup: {
    src: 'src/index.html',
    dest: './build'
  },
  templates: {
    src: 'src/**/*.html',
    base: 'src',
    dest: './build'
  },
  packages: {
    src: ['./package.json', './bower.json']
  },
  sync: {
    src: './build'
  }
};
