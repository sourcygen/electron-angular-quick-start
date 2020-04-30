<a href="https://gitHub.com/sourcygen/electron-angular-quick-start/graphs/commit-activity"><img src="https://img.shields.io/badge/maintained-yes-brightgreen.svg" alt="Maintenance Status"/></a>
    <a href="https://travis-ci.org/sourcygen/electron-angular-quick-start"><img src="https://travis-ci.org/sourcygen/electron-angular-quick-start.svg?branch=master" alt="Build Status"/></a>
    <a href="https://github.com/sourcygen/electron-angular-quick-start/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License MIT"></a>
    <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
    <a href="https://twitter.com/share?text=Build%20cross%20platform%20desktop%20app%20with%20Electron%20and%20Angular%20%F0%9F%9A%80&url=https://github.com/sourcygen/electron-angular-quick-start"><img src="https://img.shields.io/twitter/url/https/github.com/sourcygen/electron-angular-quick-start.svg?style=social" alt="Tweet" align="right"></a>
    <a href="https://github.com/sourcygen/electron-angular-quick-start/watchers"><img src="https://img.shields.io/github/watchers/sourcygen/electron-angular-quick-start.svg?style=social" alt="Watch on GitHub" align="right"></a>
    <a href="https://github.com/sourcygen/electron-angular-quick-start/stargazers"><img src="https://img.shields.io/github/stars/sourcygen/electron-angular-quick-start.svg?style=social" alt="Star on GitHub" align="right"></a>


![Electron Angular Quick Start](https://repository-images.githubusercontent.com/256546297/5eb5eb80-8ad1-11ea-87e4-a93b57e7590d)

## Overview

Depending on your need, putting up [Electron](https://www.electronjs.org/ "Electron") and [Angular](https://angular.io/ "Angular") may require a lot of setup. Fortunately, this simple project will help you **go fast** and directly start building desktop apps.

> Because building a desktop app with Electron and Angular shouldn't be difficult.

### Main features :

- This project is based on last [Angular](https://angular.io/ "Angular") version with required dependencies for [Electron](https://www.electronjs.org/ "Electron").
- This project is also written in [Typescript](https://www.typescriptlang.org/) and includes test samples ([Jasmine](https://jasmine.github.io/) and [Spectron](https://www.electronjs.org/spectron)).
- The app is runnable `on desktop` (with **live-reload** in `development mode`).
- The app is also runnable `on browser` but **without Electron features**.
- You are granted a minimal size for your app thanks to `electron-webpack`.
- You can also generate your platform packages thanks to `electron-builder`.

### Project structure :

```
electron-angular-quick-start
├── README.md
├── angular.json
├── browserslist
├── e2e
│   ├── angular              # Angular end-to-end test directory
│   └── electron             # Electron end-to-end test directory
├── electron-builder.json
├── electron-webpack.json
├── karma.conf.js
├── package.json
├── src
│   ├── angular              # Angular source directory (web part)
│   ├── electron             # Electron source directory (desktop part)
│   └── shared               # Shared source directory (common part)
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── tslint.json
└── yarn.lock
```

## Getting started

To clone and run this repository, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/), [Yarn](https://classic.yarnpkg.com/fr/docs/install) and [Angular-CLI](https://angular.io/cli) installed on your computer. And then from your command line:

> [Yarn](http://yarnpkg.com/) is strongly recommended instead of npm (see this [issue](https://github.com/electron-userland/electron-builder/issues/1147#issuecomment-276284477)).

```bash
# First, clone this repository
git clone https://github.com/sourcygen/electron-angular-quick-start.git

# Then go into the repository
cd electron-angular-quick-start

# After that, install dependencies
yarn install

# And finally run the app (dev mode)
yarn start
```

## How to use

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `yarn install`      | Install dependencies                      |
| `yarn start`        | Run the app on desktop (dev mode)         |
| `yarn ng:serve`     | Run the app on browser (dev mode)         |
| `yarn e2e`          | Run glogbal end-to-end tests              |
| `yarn ng:e2e`       | Run **angular** end-to-end tests          |
| `yarn electron:e2e` | Run **electron** end-to-end tests         |
| `yarn build`        | Build artifact content                    |
| `yarn package`      | Generate platform packages (dist/release) |

## Resources

### Electron

- [electronjs.org/docs](https://electronjs.org/docs) - Electron's documentation
- [electron/simple-samples](https://github.com/electron/simple-samples) - Small applications with ideas to take further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - Sample app that teaches you how to use Electron

### Angular

- [angular.io/start](https://angular.io/start) - Getting started with Angular
- [angular.io/docs](https://angular.io/docs) - Angular's documentation
- [cli.angular.io](https://cli.angular.io/) - Angular CLI documentation
