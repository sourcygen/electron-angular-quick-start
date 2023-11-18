<a href="https://github.com/sourcygen/electron-angular-quick-start/actions"><img src="https://github.com/sourcygen/electron-angular-quick-start/workflows/CI/badge.svg?branch=master" alt="CI Status"/></a>
<a href="https://gitHub.com/sourcygen/electron-angular-quick-start/graphs/commit-activity"><img src="https://img.shields.io/badge/maintained-yes-brightgreen.svg" alt="Maintenance Status"/></a>
<a href="https://github.com/sourcygen/electron-angular-quick-start/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License MIT"></a>
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
<a href="https://twitter.com/share?text=Build%20cross%20platform%20desktop%20app%20with%20Electron%20and%20Angular%20%F0%9F%9A%80&url=https://github.com/sourcygen/electron-angular-quick-start"><img src="https://img.shields.io/twitter/url/https/github.com/sourcygen/electron-angular-quick-start.svg?style=social" alt="Tweet" align="right"></a>
<a href="https://github.com/sourcygen/electron-angular-quick-start/watchers"><img src="https://img.shields.io/github/watchers/sourcygen/electron-angular-quick-start.svg?style=social" alt="Watch on GitHub" align="right"></a>
<a href="https://github.com/sourcygen/electron-angular-quick-start/stargazers"><img src="https://img.shields.io/github/stars/sourcygen/electron-angular-quick-start.svg?style=social" alt="Star on GitHub" align="right"></a>

![Electron Angular Quick Start](https://repository-images.githubusercontent.com/256546297/5eb5eb80-8ad1-11ea-87e4-a93b57e7590d)

## Overview

Depending on your need, putting up [Electron](https://www.electronjs.org/) and [Angular](https://angular.io/) may require a lot of setup. Fortunately, this simple project will help you **go fast** and directly start building desktop apps in [Typescript](https://www.typescriptlang.org/) with live reload.

> Because building a desktop app with Electron and Angular shouldn't be difficult.

### Main features :

- This project is based on last [Angular 17](https://angular.io/) version with required dependencies for [Electron 27](https://www.electronjs.org/).
- This project is also written in [Typescript 4/5](https://www.typescriptlang.org/) and includes test samples ([WebdriverIO](https://webdriver.io/) and [Jasmine](https://jasmine.github.io/)).
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

To clone and run this repository, you'll need installed on your computer at least :

- [Git](https://git-scm.com)
- [Node 18 or greater](https://nodejs.org/en/download/)

Then from your command line:

```bash
# Clone this repository
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
| `npm run test:angular`      | Run **angular** unit tests               |
| `npm run test:angular-e2e`  | Run **angular** end-to-end tests         |
| `npm run test:electron-e2e` | Run **electron** end-to-end tests        |
| `npm run package`           | Build and prepare application content    |
| `npm run make`              | Generate platform distributables (./out) |
| `npm run clean`             | Delete generated outputs                 |

## Behind a proxy

After settings **HTTP_PROXY** and **HTTPS_PROXY** environment variables :

```bash
# Install dependencies
npx cross-env ELECTRON_GET_USE_PROXY=true GLOBAL_AGENT_HTTPS_PROXY=%HTTPS_PROXY% npm install
```

### Adding dependencies

This project architecture is based on [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces). This allows having different version of the same dependency depending on your workspace :

- electron-app
  `npm install --save <dependency>`
- angular-app
  `npm install --save <dependency> -w angular-app`
- shared-lib
  `npm install --save <dependency> -w shared-lib`

### Listing outdated dependencies

- electron-app
  `npm run outdated-deps:electron-app`
- angular-app
  `npm run outdated-deps:angular-app`
- shared-lib
  `npm run outdated-deps:shared-lib`
- all of them
  `npm run outdated-deps`

### Updating dependencies

- electron-app
  `npm run update-deps:electron-app`
- angular-app
  `npm run update-deps:angular-app`
- shared-lib
  `npm run update-deps:shared-lib`
- all of them
  `npm run update-deps`

### Customizing app icons

```bash
# Install the icon generator globally
npm i -g electron-icon-maker

# Run following command from anywhere you have your input file (1024px at least) to generate platforms icons
electron-icon-maker --input=icon.png --output=./out
```

Rename and move files to match with next config

- ./workspaces/electron-app/main/assets/icons/icon.png for Linux
- ./workspaces/electron-app/main/assets/icons/icon.icns for MacOs
- ./workspaces/electron-app/main/assets/icons/icon.ico for Windows

## Resources

### Electron

- [electronjs.org/docs](https://electronjs.org/docs) - Electron's documentation
- [electron/simple-samples](https://github.com/electron/simple-samples) - Small applications with ideas to take further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - Sample app that teaches you how to use Electron

### Angular

- [angular.io/start](https://angular.io/start) - Getting started with Angular
- [angular.io/docs](https://angular.io/docs) - Angular's documentation
- [cli.angular.io](https://cli.angular.io/) - Angular CLI documentation
