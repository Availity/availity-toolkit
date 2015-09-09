# availity-toolkit

> Starter project for Angular apps on the Availity platform.

## Table of Contents
* [Requirements](#requirements)
* [Features](#features)
* [Folder Structure](#folder-structure)
* [Getting Started](#getting-started)
* [Authors](#authors)
* [License](#license)

## Requirements

* [node.js](https://nodejs.org/download/) - `brew install node` _(mac)_
* [git](http://git-scm.com/downloads) - `brew install git` _(mac)_
* [gulp](http://gulpjs.com/)  - `npm install -g gulp`
* [bower](http://bower.io/)  - `npm install -g bower`


## Features

The Availity Toolkit combines several projects that simplify developing web applications on Availity platform. These projects include:

* [availity-angular](https://github.com/Availity/availity-angular) -  Client side web framework using [Angular 1.2.28](https://github.com/angular/angular.js/tree/v1.2.28) :neckbeard:
* [availity-ekko](https://github.com/Availity/availity-ekko) - Mock server for REST API simulation
* [availity-uikit](https://github.com/Availity/availity-uikit) - HTML, CSS, and JS framework powered by [Boostrap 3'ish](http://getbootstrap.com/)
* [availity-workflow](https://github.com/Availity/availity-workflow) - Upgradeable task and workflow modules that leverages:
    * [Gulp](http://gulpjs.com/)
    * [Karma](http://karma-runner.github.io/0.13/index.html) with [Jasmine](http://jasmine.github.io/2.0/introduction.html) integration
    * [Webpack](https://webpack.github.io/)
    * [Less](http://lesscss.org/)
* icon fonts


## Getting Started

* `git clone https://github.com/Availity/availity-toolkit`
* `cd availity-toolkit`
* `npm install` - install module dependencies
* `av init` - CLI 
* `gulp` - starts the development server on `http://localhost:3000`

## Upgrading

Upgrading Availity bower modules:

* `bower install availity-uikit availity-angular --save`

Upgrading the workflow:

* `npm install availity-workflow --save-dev`

## Gulp

A `gulpfile.js` is included your project and has been seeded with the following tasks:

* `gulp` - starts the development server on `http://localhost:3000`
* `gulp test` - executes your spec files using the Karma test runner and [Phantom.js](http://phantomjs.org/).  
* `gulp test:server` - equivalent to the `gulp test` command but the Karma server continuously runs so that unit tests can be debugged.
* `gulp lint` - checks for stylistic and programming errors using [ESLint](http://eslint.org/).  Two [.eslintrc](.eslintrc)/[.eslintrc](project/app/.eslintrc) files are included in your project using the Availity javascript standards.  The `.eslintrc` file in the **projec/app** folder is configured for web development and ES3 support.
* `gulp test:server` - 


## Folder Structure

We encourage you to organize your project using feature folders and dashes **`-`** within file names for readability.

##### Good

```bash
├── project
|    ├── app/
|    |    ├── orders/
|    |    |   ├── tests/
|    |    |   |   └──orders-directive-spec.js
|    |    |   |   └──orders-service-spec.js
|    |    |   ├── templates/
|    |    |   |   └──orders-template.html
|    |    |   ├── orders-directive.js
|    |    |   ├── orders-controller.js
|    |    |   └── orders-service.js
|    |    ├── users/
|    |    |   ├── tests/
|    |    |   |   └──users-directive-spec.js
|    |    |   |   └──users-service-spec.js
|    |    |   ├── templates/
|    |    |   |   └──users-template.html
|    |    │   ├── users-directive.js
|    |    │   ├── users-controller.js
|    |    |   └── order-service.js
|    |    ├── index.js
|    |    ├── vendor.js
|    |    ├── module.js
|    |    ├── index.html
```

##### Bad

```bash
├── project
│    ├── app/
│    │    ├── controllers/
│    │    │   ├── homeController.js
│    │    │   └──loginController.js
│    │    ├── directives/
│    │    │   ├── usersDirective.js
│    │    │   └──ordersDirective.js
│    │    ├── services/
│    │    │   ├── userService.js
│    │    │   ├── orderService.js
│    │    │   └── loginService.js
```


## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Robert Warner**
+ [rob.warner@availity.com](rob.warner@availity.com)

**Kasey Powers**
+ [kasey.powers@availity.com](kasey.powers@availity.com)

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

Copyright (c) 2015 Availity, LLC. Code released under the [the MIT license](LICENSE)


