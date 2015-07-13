var gulp = require('gulp');
var proxyMiddleware = require('http-proxy-middleware');
var _ = require('lodash');
var chalk = require('chalk');
var dateformat = require('dateformat');
var nodemon = require('gulp-nodemon');
var _ = require('lodash');
var path = require('path');

var env = require('../../env');

gulp.task('server', ['server:rest', 'server:sync']);

gulp.task('server:rest', function () {
  nodemon({
    script: 'index.js',
    ext: 'json',
    watch: [
      path.join(env.config().routes),
      path.join(env.config().data)
    ],
    args: ['--silence'],
    env: {
      'NODE_ENV': 'development'
    }
  }).on('restart', function () {
    console.log('Ekko server restarted!');
  });
});

gulp.task('server:sync', ['server:rest'], function() {
  var browserSync = require('browser-sync');
  var url = require('url');
  var path = require('path');
  var fs = require('fs');
  var config = require('../../config');
  var compress = require('compression');

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
  var proxyUrl = _url({port: env.config().servers.web.port});
  var apiProxy = proxyMiddleware('/api', {target: proxyUrl});

  var defaults = {
    notify: true,
    open: false,
    logPrefix: chalk.grey(dateformat(new Date(), 'HH:MM:ss')) + ' browersync',
    ghostMode: false,
    server: {
      baseDir: config.sync.src,

      middleware: [
        // Middleware #1: proxy
        apiProxy,

        // Middleware #2: gzip
        compress(),

        // Middleware #3: Allow web page requests without .html file extension in URLs
        function(req, res, next) {
          var uri = url.parse(req.url);
          if(uri.pathname.length > 1 && path.extname(uri.pathname) === '' && fs.existsSync(config.sync.src + uri.pathname + '.html')) {
            req.url = uri.pathname + '.html' + (uri.search || '');
          }
          next();
        }
      ]
    }
  };

  var syncOptions = _.merge(defaults, env.options().browserSync);

  browserSync(syncOptions);
});

