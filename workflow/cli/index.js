var program = require("commander");
// var updateNotifier = require('update-notifier');
var meow = require('meow');
var _ = require('lodash');

var readSync = require('../utils/read-sync');
var meta = readSync();

program.version(meta.package.json.version);

var cli = meow({
  help: false,
  pkg: meta.package.json
});
cli.program = program;
cli.package = meta.package;
cli.bower = meta.bower;
cli.availity = meta.availity;

var commands = require('require-dir')('./commands', { recurse: true });
_.forEach(commands, function(command) {
  command(cli);
});

program.parse(process.argv);

if (!program.args.length)  {
  program.help();
}

// NOTIFY
// updateNotifier({pkg: cli.pkg}).notify();

