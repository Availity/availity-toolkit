var path = require('path');

var developerConfig = {

  development: {

    open: '#',

    data: path.join(__dirname, '../data'),
    routes: path.join(__dirname, './routes.json'),

    servers: {
      web: {
        host: '127.0.0.1',
        port: 9999
      },
      app: {
        host: '127.0.0.1',
        port: 3000
      },
      api: {
        proxy: false,
        port: 8280,
        headers: {
          RemoteUser: 'jdoe'
        },
        proxies: [
          {
            context: '/api',
            rewrite: {
              from: '^/api',
              to: ''
            }
          },
          {
            context: '/public/api',
            rewrite: {
              from: '^/public/api',
              to: ''
            }
          }
        ]
      },
      legacyApi: {
        proxy: true,
        port: 8281,
        headers: {
          RemoteUser: 'jdoe'
        },
        proxies: [
          {
            context: '/api\/v1\/uploads',
            rewrite: {
              from: '^/api/v1/uploads',
              to: '/aries/api/v1/uploads'
            }
          },
          {
            context: '/api\/v1\/attachments',
            rewrite: {
              from: '^/api/v1/attachments',
              to: '/aries/api/v1/attachments'
            }
          },
          {
            context: '/api\/v1\/receiver-attachments',
            rewrite: {
              from: '^/api/v1/receiver-attachments',
              to: '/aries/api/v1/receiver-attachments'
            }
          }
        ]
      },
      legacyWeb: {
        proxy: true,
        port: 8080,
        proxies: [
          {
            context: '/availity'
          }
        ]
      }
    }
  },

  production: {

    data: path.join(__dirname, '../data'),
    routes: path.join(__dirname, './routes.json'),

    latency: 300,
    user: null,
    cache: 86400000,
    limit: '50mb',

    servers: {
      web: {
        host: '127.0.0.1',
        port: 9999
      }
    }
  }

};

module.exports = developerConfig;
