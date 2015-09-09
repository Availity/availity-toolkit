# availity-toolkit

> Starter project for Angular apps on the Availity platform.

## Table of Contents
* [Requirements](#requirements)
* [Intro](#intro)
* [Folder Structure](#folder-structure)
* [Getting Started](#getting-started)
* [Authors](#authors)
* [License](#license)

## Requirements

* [node.js](https://nodejs.org/download/) - `brew install node` _(mac)_
* [git](http://git-scm.com/downloads) - `brew install git` _(mac)_
* [gulp](http://gulpjs.com/)  - `npm install -g gulp`
* [bower](http://bower.io/)  - `npm install -g bower`


## Intro

The Availity Toolkit assembles several projects that make developing for web applications on Availity platform easier. These projects include:

* [availtiy-angular](https://github.com/Availity/availity-angular) - Client side web framework
* [avality-ekko](https://github.com/Availity/availity-ekko) - Mock server for REST API simulation
* [availity-uikit](https://github.com/Availity/availity-uikit) - HTML, CSS, and JS framework powered by Boostrap 3'ish 
* [availity-workflow](https://github.com/Availity/availity-workflow) - Upgradeable tasks and workflows for web development using Gulp, Karma and Webpack.

## Getting Started

* `git clone ttps://github.com/Availity/availity-toolkit`
* `cd availity-toolkit`
* `npm install`
* `av init` - runs the cli

## Upgrading

> Run the following commands to upgrade some of the core libs throughout the application development lifecyle

* `bower install availity-uikit availity-angular --save`
* `npm install availity-workflow --save-dev`


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

## License

Copyright (c) 2015 Availity, LLC. Code released under the [the MIT license](LICENSE)


