var inquirer = require("inquirer");
var semver = require('semver');
var sync = require('../../utils/sync');
var Joi = require('joi');


module.exports = function (cli) {

  cli.program
    .command("init")
    .description("initialize project meta data (package.json, bower.json, availity.json)")
    .action(function() {

      var questions = [
        {
          name: "author",
          message: "name (author)",
          validate: function(value) {
            var schema = Joi.string();
            var valid = Joi.validate(value, schema);

            if(!valid.error) {
              return true;
            }

            return "Please enter name for project author";
          }
        },
        {
          name: "email",
          message: "email (author email)",
          validate: function(value) {

            var schema = Joi.string().email();
            var valid = Joi.validate(value, schema);

            if(!valid.error) {
              return true;
            }

            return "Please enter valid email of project author";
          }
        },
        {
          name: "name",
          message: 'project name (npm package naming conventions):',
          filter: function(val) {
            return val.toLowerCase();
          },
          validate: function(value) {
            var schema = Joi.string().regex(/^[a-z][a-z0-9\-]+$/i).min(1).max(214);
            var valid = Joi.validate(value, schema);

            if(!valid.error) {
              return true;
            }

            return  "Enter valid project name. See https://docs.npmjs.com/files/package.json#name for more details.";
          }
        },
        {
          name: "description",
          message: 'description:'
        },
        {
          name: 'version',
          message: 'version:',
          default: "1.0.0",
          validate: function(value) {
            var valid = semver.valid(value);

            if(valid) {
              return true;
            }

            return "Enter valid semver version number.  Please see http://semver.org/spec/v2.0.0.html for more details.";
          }
        },
        {
          name: "url",
          message: 'git url:'
        },
        {
          name: "license",
          message: "license",
          default: "UNLICENSED"
        },
        {
          name: 'keywords',
          message: 'keywords (comma separated):',
          filter: function(val) {
            return val.toLowerCase().split(',');
          },
          validate: function(value) {
            var schema = Joi
              .array().items(
                Joi.string().regex(/^[a-z0-9\-]+$/i).max(30)
              )
              .single();
            var valid = Joi.validate(value, schema);

            if(!valid.error) {
              return true;
            }

            return "Keywords must be unique, start with a letter and can only contain alpha and dashes";
          }
        }
      ];

      inquirer.prompt(questions, function(answers) {
        cli.meta = answers;
        sync(cli);
      });

    });
};
