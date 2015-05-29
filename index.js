var Ekko = require('availity-ekko');

var developerConfig = require('./default-config');

var ekko = new Ekko();
ekko.start(developerConfig);
