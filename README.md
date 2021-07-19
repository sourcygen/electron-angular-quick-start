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

- This project is based on last [Angular 12](https://angular.io/ "Angular") version with required dependencies for [Electron 13](https://www.electronjs.org/ "Electron").
- This project is also written in [Typescript 4](https://www.typescriptlang.org/) and includes test samples ([Jasmine](https://jasmine.github.io/) and [Spectron 15](https://www.electronjs.org/spectron)).
- The app is runnable `on desktop` (with **live-reload** in `development mode`).
- The app is also runnable `on browser` but **without Electron features**.
- You can generate your platform distributables thanks to [`electron-forge`](https://www.electronforge.io/).
- You are also granted a minimal size for your app thanks to the packaging based on its[`webpack-template`](https://www.electronforge.io/templates/typescript-+-webpack-template).

### Project structure :

```
├── ./CHANGELOG.md
├── ./LICENSE
├── ./README.md
├── ./_config.yml
├── ./commitlint.config.js
├── ./package-lock.json
├── ./package.json
├── ./tsconfig.json
├── ./webpack.main.config.js
├── ./webpack.plugins.js
├── ./webpack.renderer.config.js
├── ./webpack.rules.js
└── ./workspaces
    ├── ./workspaces/angular-app       # Angular source directory (web renderer part)
    ├── ./workspaces/electron-app      # Electron source directory (main & preload part)
    ├── ./workspaces/electron-e2e      # Electron end-to-end test directory
    └── ./workspaces/shared-lib        # Shared source directory (common part)
```

## Getting started

To clone and run this repository, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [Angular-CLI](https://angular.io/cli) installed on your computer. And then from your command line:

```bash
# First, clone this repository
git clone https://github.com/sourcygen/electron-angular-quick-start.git

# Then go into the repository
cd electron-angular-quick-start

# After that, install dependencies
npm install

# And finally run the app (dev mode)
npm start
```

## How to use

| Command                     | Description                              |
| --------------------------- | ---------------------------------------- |
| `npm run install`           | Install dependencies                     |
| `npm run start`             | Run the app on desktop (dev mode)        |
| `npm run start:angular-app` | Run the app on browser (dev mode)        |
| `npm run test:electron-e2e` | Run **electron** end-to-end tests        |
| `npm run package`           | Build and prepare application content    |
| `npm run make`              | Generate platform distributables (./out) |
| `npm run clean`             | Delete generated outputs                 |

## Resources

### Electron

- [electronjs.org/docs](https://electronjs.org/docs) - Electron's documentation
- [electron/simple-samples](https://github.com/electron/simple-samples) - Small applications with ideas to take further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - Sample app that teaches you how to use Electron

### Angular

- [angular.io/start](https://angular.io/start) - Getting started with Angular
- [angular.io/docs](https://angular.io/docs) - Angular's documentation
- [cli.angular.io](https://cli.angular.io/) - Angular CLI documentation
