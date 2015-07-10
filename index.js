
var Ekko = require('availity-ekko');

var env = require('./workflow/env');
env.load();

var ekko = new Ekko();
ekko.start(env.options());
