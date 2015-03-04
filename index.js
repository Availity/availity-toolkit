var path = require('path');
var Ekko = require('availity-ekko');

var configPath = path.join(__dirname, 'config.js');

var ekko = new Ekko(configPath);
ekko.start();
