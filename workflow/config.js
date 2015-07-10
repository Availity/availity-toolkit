var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var pjson = require('../package.json');

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
    src: 'project/app/**/*.js',
    srcAll: ['gulpfile.js', 'workflow/**/*.js', 'project/app/**/*.js'],
    specs: 'project/app/**/*-spec.js',
    reportsDir: path.join(__dirname, '..', 'reports')
  },
  less: {
    src: 'project/app/index.less',
    targets: 'project/app/**/*.less',
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
    src: 'project/app/index.js',
    dest: './build' // webpack requires absolute paths
  },
  vendor: {
    src: 'project/app/vendor.js',
    dest: './build'
  },
  polyfill: {
    name: 'polyfill.js',
    src: [
      'bower_components/html5shiv/dist/html5shiv.min.js',
      'bower_components/respond/dest/respond.min.js'
    ],
    dest: './build/js'
  },
  markup: {
    src: 'project/app/index.html',
    dest: './build'
  },
  templates: {
    src: ['!project/app/index.html', 'project/app/**/*.html'],
    base: 'src',
    dest: './build'
  },
  tests: {
    src: [
      'specs.js',
      {
        pattern: path.join(__dirname, '..', '/project/app/**/*-spec.js'),
        included: false,
        served: false,
        watched: true
      }
    ]
  },
  packages: {
    src: ['./package.json', './bower.json']
  },
  sync: {
    src: './build'
  },
  deploy: {
    src: './build',
    dest: '../availity-web/projects/' + pjson.name
  }
};
