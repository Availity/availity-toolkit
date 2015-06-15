var gulp = require('gulp');
var proxyMiddleware = require('http-proxy-middleware');
var _ = require('lodash');
var chalk = require('chalk');
var dateformat = require('dateformat');
var nodemon = require('gulp-nodemon');
var _ = require('lodash');
var path = require('path');

var config = require('../../config');
var developerConfig = require(path.resolve(config.project.path, 'project/config/developer-config'));

gulp.task('server', ['server:rest', 'server:sync']);

gulp.task('server:rest', function () {
  nodemon({
    script: 'index.js',
    ext: 'json',
    watch: [
      path.join(config.project.path, 'project/config/routes.json'),
      path.join(config.project.path, 'project/data')
    ],
    // nodeArgs: ['--debug'],
    env: { 'NODE_ENV': 'development' }
  }).on('restart', function () {
    console.log('server restarted!');
  });
});

gulp.task('server:sync', ['server:rest'], function() {
  var browserSync = require('browser-sync');
  var url = require('url');
  var path = require('path');
  var fs = require('fs');
  var config = require('../../config');

  // Parse out url and create the following config:
  //
  // EX:
  //
  // {
  //  host: localhost,
  //  port: 3000
  //  route: /api
  //
  // }
  var _url = _.template('http://localhost:<%= port %>/');
  var proxyUrl = _url({port: developerConfig.development.servers.web.port});
  var apiProxy = proxyMiddleware('/api', {target: proxyUrl});

  browserSync({
    notify: true,
    open: true,
    logPrefix: chalk.grey(dateformat(new Date(), 'HH:MM:ss')) + ' browersync',
    ghostMode: false,
    server: {
      baseDir: config.sync.src,

      middleware: [
        // Middleware #1: proxy
        apiProxy,

        // Middleware #2: Allow web page requests without .html file extension in URLs
        function(req, res, next) {
          var uri = url.parse(req.url);
          if(uri.pathname.length > 1 && path.extname(uri.pathname) === '' && fs.existsSync(config.sync.src + uri.pathname + '.html')) {
            req.url = uri.pathname + '.html' + (uri.search || '');
          }
          next();
        }
      ]
    }
  });
});

