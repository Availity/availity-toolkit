The Availity Toolkit uses [Gulp](http://gulpjs.com) to automate your workflow. You should have installed Gulp when you installed [Availity Command-line (CLI)](https://github.com/Availity/availity-cli). You can verify by opening a terminal or command prompt and typing:

>
```sh
availity doctor
```

You should see output like this:

>
```sh
Checking for bower . . . OK
Checking for gulp . . . OK
Checking for git . . . OK
```

If you don't see "OK" for each line in the output, please install the required tools before proceeding with the Availity Toolkit.

### Gulp Commands

To use gulp, you type (in a terminal or command prompt) `gulp` and then the name of the task you wish to run. If you want to run a task named "foo" for example, you would type:

>
```sh
gulp foo
```

If you don't specify a task, a task named "default" will run. This is normally how you will use Gulp.

>
```sh
gulp
```

See below for all the available tasks and what they do.

#### Default

>
```sh
gulp
```


Runs the default task, which runs these tasks:
* less
* build
* copy
* server:sync
* watch

#### Build

>
```sh
gulp build
```

Builds your latest code for development.


#### Dist

>
```sh
gulp dist
```

Packages your code for distribution.

Pulls down the latest Availity configuration files from the Availity Git repository.

#### Less

>
```sh
gulp less
```

Compiles your Less code to CSS.

#### Lint

>
```sh
gulp lint
```

The term "lint" applies to software that reviews your source code for issues; see http://en.wikipedia.org/wiki/Lint_%28software%29 for more information. This task reviews your JavaScript code using the rules specified in `.jshintrc`, `.jshintignore`, and `jscsrc`. 


#### Publish

>
```sh
gulp publish
```

Publishes code to the NPM and Bower repositories. 

#### Readme

>
```sh
gulp readme
```

Creates this README file.

#### Rest Server

>
```sh
gulp server:rest
```

Starts the Availity Ekko server, which is a REST mock server that the Availity Ekko module provides.

#### Server Sync

>
```sh
gulp server:sync
```

Synchronizes your browser with any code changes you make (as soon as you save them). When you have this task set to automatically run (as the default task does), you will see your code changes automatically reflected in your browser without switching to your browser and reloading the page.

#### Watch

>
```sh
gulp watch
```

Watches the code on your file system for any changes and triggers the necessary tasks for your code changes to synchronize to your browser. Note that this command continues to watch until you stop it by pressing Control+C.
