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
