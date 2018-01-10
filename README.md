# availity-toolkit

> Starter project for Angular apps on the Availity platform.

## Requirements

* `Node v8+` - [https://nodejs.org/download/](https://nodejs.org/download/)
* `node-gyp` - Review your operating system installation requirements @  [https://github.com/nodejs/node-gyp#installation](https://github.com/nodejs/node-gyp#installation)
* `Git` - Download latest version for your operating systems @ [http://git-scm.com/downloads](http://git-scm.com/downloads)

## Features

The Toolkit combines several projects that simplify developing web applications on Availity platform:

* [availity-angular](https://github.com/Availity/availity-angular) -  Client side web framework using [Angular 1.6+](https://github.com/angular/angular.js/tree/v1.2.28)
* [availity-ekko](https://github.com/Availity/availity-ekko) - Mock server for REST API simulation
* [availity-uikit](https://github.com/Availity/availity-uikit) - HTML, CSS, and JS framework powered by [Boostrap 3 and cards from Bootstrap 4](http://getbootstrap.com/)
* [availity-workflow](https://github.com/Availity/availity-workflow) - Upgradeable CLI engine that leverages:
    * [Webpack 3](https://webpack.js.org/)
    * [Karma](http://karma-runner.github.io/0.13/index.html)
    * [Jasmine](http://jasmine.github.io/2.0/introduction.html)
    * [Less](http://lesscss.org/)
    * [SASS](https://github.com/sass/node-sass)
    
> Please read the [availity-workflow READMDE.md](https://github.com/Availity/availity-workflow) to see a detailed list of features provided by our CLI engine

## Upgrading from 1.x

Please read the [upgrade docs](https://github.com/Availity/availity-toolkit/wiki/Upgrading-to-availity-angular-2.x-and-availity-workflow-2.x)
    
## Getting Started

* `git clone https://github.com/Availity/availity-toolkit {{your-project-name}}`
* `cd {{your-project-name}}`
*  Delete `.git` directory
* `git remote add origin ssh://{{your-git-url}}.git`
* `git init`
* `npm init`
* `npm install` - install module dependencies
* `npm start`

## CLI

```bash
❯ npm run help
```

### Command specific help
```bash
npm run help <command>
```

#### Example
```
❯ npm run help lint

Options:
--include, -i  Glob patterns to INCLUDE for ESLint scanning
-h, --help     Show help
```

> NPM scripts require a `--` before CLI arguments else they won't get recognized by availity-workflow
```
❯ npm run lint -- --include=**/*.js
```

## Releasing

* `npm run production`
    - run interactive cli
    - minifies bundles
    - cache bust bundles
    - tags bundle in git
    - bundles are stored in `./dist` folder
* `npm run staging`
    - run interactive cli
    - cache bust bundles
    - tags bundle in git
    - bundles are stored in `./dist` folder
* `npm run integration`
    - run interactive cli
    - cache bust bundles
    - bundles are stored in `./build` folder

## Upgrading

Always check the release notes for breaking changes.

* https://github.com/Availity/availity-workflow/releases
* https://github.com/Availity/availity-uikit/releases
* https://github.com/Availity/availity-angular/releases

```bash
npm install availity-workflow --save-dev
```

## Troubleshooting

* Git protocol blocked by firewall
```bash
git config --global url."https://".insteadOf git://`
```
* For Windows installation issue, please review your [node-gyp system requirements](https://github.com/nodejs/node-gyp#installation) for Node to function properly.
* `EADDRNOTAVAIL` or `ERR_CONNECTION_CLOSED`. Change bind address from `0.0.0.0` to `127.0.0.1` or `localhost` for your [web server](https://github.com/Availity/availity-toolkit/blob/master/project/config/developer-config-example.js#L14) configuration

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

Copyright (c) 2017 Availity, LLC. Code released under the [the MIT license](LICENSE)

