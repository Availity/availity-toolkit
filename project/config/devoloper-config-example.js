var path = require('path');

var developerConfig = {

  development: {
    data: path.join(__dirname , '../data'),
    routes: path.join(__dirname, './routes.json'),
    servers: {
      web: {
        host: '0.0.0.0',
        port: 9999
      },
      api : {
        proxy : true,
        port : 8280,
        headers: {
          RemoteUser: 'jdoe'
        },
        proxies : [
          {
            context : '/api',
            rewrite : {
              from : '^/api',
              to : ''
            }
          },
          {
            context : '/public/api',
            rewrite : {
              from : '^/public/api',
              to : ''
            }
          }
        ]
      },
      legacy : {
        proxy : true,
        port : 8080,
        context : '/availity'
      }
    }
  },

  production: {
    data: path.join(__dirname , '../data'),
    routes: path.join(__dirname, './routes.json'),
    latency: 300,
    user: null,
    cache: 86400000,
    limit: '50mb',
    servers: {
      web: {
        host: "0.0.0.0",
        port: 9999
      }
    }
  }

};

module.exports = developerConfig;
