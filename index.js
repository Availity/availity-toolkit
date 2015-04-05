var Ekko = require('availity-ekko');

var developerConfig = require('./developer-config');

var ekko = new Ekko();
ekko.start(developerConfig);
