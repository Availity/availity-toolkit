var program = require("commander");
// var updateNotifier = require('update-notifier');
var meow = require('meow');
var _ = require('lodash');

var readSync = require('../utils/read-sync');
var manifests = readSync();

program.version(manifests.package.json.version);

var cli = meow({
  help: false,
  pkg: manifests.package.json
});
cli.program = program;
cli.manifests = manifests;

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

