# availity-toolkit

> Toolkit for Angular apps on the Availity platform.

## Table of Contents
* [Intro](#intro)
* [Working with the Toolkit](#working-with-the-toolkit)
* [Supported Browsers](#supported-browsers)
* [Authors](#authors)
* [License](#license)


## Intro
The Availity Toolkit assembles several Availity projects that make developing for the Availity platform easier. These projects include:

* [Availity Angular SDK](https://github.com/Availity/availity-angular)
* [Availity Ekko](https://github.com/Availity/availity-ekko)
* [Availity UIKit](https://github.com/Availity/availity-uikit)

Follow the above links to see more information about each project.


## Working with the Toolkit
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

#### Gulp Commands

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

##### Default

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

##### Build

>
```sh
gulp build
```

Builds your latest code for development.

##### Bump

>
```sh
gulp bump
```

Bumps the version number of your code using [Semantic Versioning](http://semver.org/). You must specify whether to bump the major, minor, or patch version number:

>
```sh
gulp bump:major
gulp bump:minor
gulp bump:patch
```

##### Dist

>
```sh
gulp dist
```

Packages your code for distribution.

##### Dotfiles

>
```sh
gulp dotfiles
```

Pulls down the latest Availity configuration files from the Availity Git repository.

##### Less

>
```sh
gulp less
```

Compiles your Less code to CSS.

##### Lint

>
```sh
gulp lint
```

The term "lint" applies to software that reviews your source code for issues; see http://en.wikipedia.org/wiki/Lint_%28software%29 for more information. This task reviews your JavaScript code using the rules specified in `.jshintrc`, `.jshintignore`, and `jscsrc`. 


##### Publish

>
```sh
gulp publish
```

Publishes code to the NPM and Bower repositories. 

##### Readme

>
```sh
gulp readme
```

Creates this README file.

##### Server:Rest

>
```sh
gulp server:rest
```

Starts the Availity Ekko server, which is a REST mock server that the Availity Toolkit provides.

##### Server:Sync

>
```sh
gulp server:sync
```

Synchronizes your browser with any code changes you make (as soon as you save them). When you have this task set to automatically run (as the default task does), you will see your code changes automatically reflected in your browser without switching to your browser and reloading the page.

##### Watch

>
```sh
gulp watch
```

Watches the code on your file system for any changes and triggers the necessary tasks for your code changes to synchronize to your browser. Note that this command continues to watch until you stop it by pressing Control+C.


## Supported Browsers
availity-toolkit is tested using the following browsers:

* Internet Explorer 8 and newer
* Google Chrome (latest version)
* Mozilla Firefox (latest version)

availity-toolkit should likely work fine with other browsers as well, though you may experience some issues.


## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Robert Warner**
+ [rob.warner@availity.com](rob.warner@availity.com)



## License
Copyright (c) 2015 Availity, LLC