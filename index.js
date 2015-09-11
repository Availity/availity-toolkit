var Ekko = require('availity-ekko');

var developerConfig = require('./project/config/developer-config');

var ekko = new Ekko();
ekko.start(developerConfig);


