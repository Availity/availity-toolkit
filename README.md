# availity-toolkit

> Toolkit for Angular apps on the Availity platform.

## Table of Contents
* [Intro](#intro)
* [Folder Structure](#folder-structure)
* [Working with the Toolkit](#working-with-the-toolkit)
* [Authors](#authors)
* [License](#license)


## Intro
The Availity Toolkit assembles several Availity projects that make developing for the Availity platform easier. These projects include:

* [Availity Angular SDK](https://github.com/Availity/availity-angular)
* [Availity Ekko](https://github.com/Availity/availity-ekko)
* [Availity UIKit](https://github.com/Availity/availity-uikit)

Follow the above links to see more information about each project.

## Folder Structure

#### Folder Structure

We encourage you to organize your project files by feature.


##### Good

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

#### Workflow

please see Availity-Workflow for gulp information and how to set it up with toolkit.

## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Robert Warner**
+ [rob.warner@availity.com](rob.warner@availity.com)

## License
Copyright (c) 2015 Availity, LLC
