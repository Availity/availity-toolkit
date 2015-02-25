# availity-toolkit

> Availity Toolkit for building Availity AngularJS apps

## Table of Contents
* [Intro](#intro)
* [Authors](#authors)
* [Projects](#projects)
* [Working with the Toolkit](#working-with-the-toolkit)
* [License](#license)


## Intro
Inspired by [gulp-starter](https://github.com/greypants/gulp-starter). Availity Gulp project contains some common patterns established when creating Node.js powered projects that use Gulp.

* Auto-generating README.md
* Mocha tests and coverage reports
* Individual Gulp tasks for easier project maintenance
* BrowserSync
* Dotfiles sync
* JavaScript Code Style checker

## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Robert Warner**
+ [rob.warner@availity.com](rob.warner@availity.com)



## Projects
The Availity Toolkit assembles several Availity projects that make developing for the Availity platform easier. These projects include:

* [Availity Angular SDK](https://git.availity.com/projects/API/repos/availity-angular-sdk/browse)
* [Availity Ekko](https://git.availity.com/projects/API/repos/availity-ekko/browse)
* [Availity Gulp Starter](https://github.com/Availity/availity-gulp-starter)
* [Availity UIKit](https://git.availity.com/projects/API/repos/availity-uikit/browse)

Follow the above links to see more information about each project.


## Working with the Toolkit
The Availity Toolkit uses [Gulp](http://gulpjs.com) to automate your workflow. You should have installed Gulp when you installed Availity Command-line (CLI). You can verify by opening a terminal or command prompt and typing:

```sh
availity doctor
```

You should see output like this:

```sh
Checking for bower . . . OK
Checking for gulp . . . OK
Checking for git . . . OK
```

If you don't see "OK" for each line in the output, please install the required tools before proceeding with the Availity Toolkit.

#### Gulp Commands

To use gulp, you type (in a terminal or command prompt) `gulp` and then the name of the task you wish to run. If you want to run a task named "soda," for example, you would type:

```sh
gulp soda
```

If you don't specify a task, a task named "default" will run. This is normally how you will use Gulp.

```sh
gulp
```

See below for all the available tasks and what they do.

##### Default

```sh
gulp
```

**What it does**
Runs the default task, which runs these tasks:
* less
* build
* server:sync
* watch

##### Build

```sh
gulp build
```

**What it does**
Builds your latest code for development.

##### Bump

```sh
gulp bump
```

**What it does**
Bumps the version number of your code using [Semantic Versioning](http://semver.org/). You must specify whether to bump the major, minor, or patch version number:

```sh
gulp bump:major
gulp bump:minor
gulp bump:patch
```

##### Dist

```sh
gulp dist
```

**What it does**
Packages your code for distribution.

##### Dotfiles

```sh
gulp dotfiles
```

**What it does**
Pulls down the latest Availity configuration files from the Availity Git repository.

##### Less

```sh
gulp less
```

**What it does**
Compiles your Less code to CSS.

##### Lint

```sh
gulp lint
```

**What it does**
The term "lint" applies to software that reviews your source code for issues; see http://en.wikipedia.org/wiki/Lint_%28software%29 for more information. This task reviews your JavaScript code using the rules specified in `.jshintrc`, `.jshintignore`, and `jscsrc`. 


##### Publish

```sh
gulp publish
```

**What it does**
Publishes code to the NPM and Bower repositories. 

##### Readme

```sh
gulp readme
```

**What it does**
Creates this README file.

##### Server:Rest

```sh
gulp server:rest
```

**What it does**
Starts the Availity Ekko server, which is a REST mock server that the Availity Toolkit provides.

##### Server:Sync

```sh
gulp server:sync
```

**What it does**
Synchronizes your browser with any code changes you make (as soon as you save them). When you have this task set to automatically run (as the default task does), you will see your code changes automatically reflected in your browser without switching to your browser and reloading the page.

##### Watch

```sh
gulp watch
```

**What it does**
Watches the code on your file system for any changes and triggers the necessary tasks for your code changes to synchronize to your browser. Note that this command continues to watch until you stop it by pressing Control+C.

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License
Copyright (c) 2015 Availity, LLC
Released under the MIT license
