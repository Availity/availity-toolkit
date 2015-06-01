var path = require('path');

var developerConfig = {

  development: {
    data: path.join(__dirname , '../data'),
    routes: path.join(__dirname, './routes.json'),
    servers: {
      web: {
        host: '0.0.0.0',
        port: 9999
      }
    }
  },
  t1: 1,
  production: {
    latency: 300,
    user: null,
    cache: 86400000,
    limit: '50mb',
    servers: {
      web: {
        host: "0.0.0.0",
        port: 9999
      }
    },
    data: path.join(__dirname , '../data'),
    routes: path.join(__dirname, './routes.json')
  }

};

module.exports = developerConfig;
