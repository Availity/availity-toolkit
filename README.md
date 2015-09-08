# availity-toolkit

> Starter project for Angular apps on the Availity platform.

## Table of Contents
* [Requirements](#require)
* [Intro](#intro)
* [Folder Structure](#folder-structure)
* [Getting Started](#getting-started)
* [Authors](#authors)
* [License](#license)

# Requirements

* [node.js](https://nodejs.org/download/)
* [git](http://git-scm.com/downloads)
* [gulp](http://gulpjs.com/) 
    * `npm install -g gulp`
* [bower](http://bower.io/) 
    * `npm install -g bower`


## Intro

The Availity Toolkit assembles several Availity projects that make developing for web applications on Availity platform easier. These projects include:

* [availtiy-angular](https://github.com/Availity/availity-angular)
* [avality-ekko](https://github.com/Availity/availity-ekko)
* [availity-uikit](https://github.com/Availity/availity-uikit)
* [availity-workflow](https://github.com/Availity/availity-workflow)

# Getting Started

* `git clone ttps://github.com/Availity/availity-toolkit`
* `cd availity-toolkit`
* `npm install`
* `av init`

> The README.md file is your documentation.

## Folder Structure

We encourage you to organize your project files by feature.

##### Good

>
```
├── orders/
|   ├── tests/
|   |   └──orders-directive-spec.js
|   |   └──orders-service-spec.js
|   ├── templates/
|   |   └──orders-template.html
|   ├── orders-directive.js
|   ├── orders-controller.js
|   └── orders-service.js
├── users/
|   ├── tests/
|   |   └──users-directive-spec.js
|   |   └──users-service-spec.js
|   ├── templates/
|   |   └──users-template.html
│   ├── users-directive.js
│   ├── users-controller.js
|   └── order-service.js
├── home/
|   ├── templates/
│   |    └── home-template.html
|   ├── home-controller.js
```

##### Bad

>
```
js/
├── controllers/
│   ├── homeController.js
│   └──loginController.js
├── directives/
│   ├── usersDirective.js
│   └──ordersDirective.js
├── services/
│   ├── userService.js
│   ├── orderService.js
│   └──loginService.js
│partials/
│   ├── home.html
│   └── login.html
```


## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Robert Warner**
+ [rob.warner@availity.com](rob.warner@availity.com)

## License

Copyright (c) 2015 Availity, LLC
