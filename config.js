var path = require('path');

var config = {

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
    data: path.join(__dirname, '/data'),
    routes: path.join(__dirname, '/routes.json'),
    directory: path.join(__dirname, '/build')
  }

};

module.exports = config;
