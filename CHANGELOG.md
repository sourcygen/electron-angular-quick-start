# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0](https://github.com/sourcygen/electron-angular-quick-start/compare/v3.2.0...v4.0.0) (2023-11-15)

- angular upgrade - 14.2.3 => 15.2.8 ([7b7d8f7](https://github.com/sourcygen/electron-angular-quick-start/commit/7b7d8f750d6a8e3bf0c351b53b8837b121c274cf))
- electron upgrade - 20.2.0 => 24.1.2 ([53fcbba](https://github.com/sourcygen/electron-angular-quick-start/commit/53fcbba1ffe51386fb350ab651160c90c15886ad))

## [3.2.0](https://github.com/sourcygen/electron-angular-quick-start/compare/v3.1.0...v3.2.0) (2022-09-24)

### Features

- angular upgrade - 13.3.2 => 14.2.3 ([fa6222a](https://github.com/sourcygen/electron-angular-quick-start/commit/fa6222a1a86c0528a09f901a97f61f374933e2a6))
- electron upgrade - 18.0.3 => 20.2.0 ([f1fce63](https://github.com/sourcygen/electron-angular-quick-start/commit/f1fce63e24fc8c0ca53a97a83e337ea36332e645))

## [3.1.0](https://github.com/sourcygen/electron-angular-quick-start/compare/v3.0.0...v3.1.0) (2022-04-07)

## [3.0.0](https://github.com/sourcygen/electron-angular-quick-start/compare/v2.4.0...v3.0.0) (2022-04-07)

### Features

- migrating electron e2e from spectron (deprecated) to wdio ([#32](https://github.com/sourcygen/electron-angular-quick-start/issues/32)) ([d7c7af1](https://github.com/sourcygen/electron-angular-quick-start/commit/d7c7af13f109427c74e55886c2de0a19614283b6))

## [2.4.0](https://github.com/sourcygen/electron-angular-quick-start/compare/v2.0.1...v2.4.0) (2021-08-06)

### Features

- ci build/test/make (github workflows) ([351eb1a](https://github.com/sourcygen/electron-angular-quick-start/commit/351eb1a7f0bd78043d8590effe7482965e0574b1))

### Bug Fixes

- shared-lib not found ([99742e3](https://github.com/sourcygen/electron-angular-quick-start/commit/99742e3dc1779141c5c8f2ec573faf33c72dea84))
- using chokidar instead of npm-watch (issue [#4](https://github.com/sourcygen/electron-angular-quick-start/issues/4)) ([2feedce](https://github.com/sourcygen/electron-angular-quick-start/commit/2feedcefc5a2125e701b460bbd3d644775572d47))

## [2.3.0](https://github.com/sourcygen/electron-angular-quick-start/compare/v2.0.1...v2.3.0) (2021-08-01)

### Features

- ci build/test/make (github workflows) ([351eb1a](https://github.com/sourcygen/electron-angular-quick-start/commit/351eb1a7f0bd78043d8590effe7482965e0574b1))

### Bug Fixes

- shared-lib not found ([99742e3](https://github.com/sourcygen/electron-angular-quick-start/commit/99742e3dc1779141c5c8f2ec573faf33c72dea84))
- using chokidar instead of npm-watch (issue [#4](https://github.com/sourcygen/electron-angular-quick-start/issues/4)) ([2feedce](https://github.com/sourcygen/electron-angular-quick-start/commit/2feedcefc5a2125e701b460bbd3d644775572d47))

## [2.2.0](https://github.com/sourcygen/electron-angular-quick-start/compare/v2.0.1...v2.2.0) (2021-07-22)

### Bug Fixes

- shared-lib not found ([99742e3](https://github.com/sourcygen/electron-angular-quick-start/commit/99742e3dc1779141c5c8f2ec573faf33c72dea84))

## 2.1.0 (2021-07-22)

### Features

- git hook config (husky eslint prettier) ([77b15bd](https://github.com/sourcygen/electron-angular-quick-start/commit/77b15bdfc4355afa63cd7517e87da0029a804691))
- cypress setup for angular e2e tests ([7a3d5d7](https://github.com/sourcygen/electron-angular-quick-start/commit/7a3d5d7d3aaf92c4de9c89349a14c59d84d38afb))
- crossplatform icon config ([4e9506a](https://github.com/sourcygen/electron-angular-quick-start/commit/4e9506aca5515dd32b481b9c6d26c5c79598dcea))

### Bug Fixes

- fixing eslint problems ([1a5a76f](https://github.com/sourcygen/electron-angular-quick-start/commit/1a5a76f9121115db65ad3e1cb07f0b008c2e958a))

# 2.0.0 (2021-07-19)

### Features

- migrate from electron-webpack to electron-forge ([4fa2999](https://github.com/sourcygen/electron-angular-quick-start/commit/4fa299996145deb61e3b65d3d05faab0bd8a25e1))

## 1.0.2 (2020-09-29)

### Bug Fixes

- reopening window crash on macos ([f442df7](https://github.com/sourcygen/electron-angular-quick-start/commit/f442df72c4120fb616d21c5c4e245a5eb478f57e))

### Features

- disable remote content execution ([0c82cf4](https://github.com/sourcygen/electron-angular-quick-start/commit/0c82cf425930de7368debfbc6176a3ef8ed7591e))
- adapt angular part ([83301e0](https://github.com/sourcygen/electron-angular-quick-start/commit/83301e0fe7387e791d23f7c1d6cdaeb1f53e3cf4))
- adapt electron part ([73acf88](https://github.com/sourcygen/electron-angular-quick-start/commit/73acf88a079984e50c15e23e5ad0aa98b0a7c2a1))
- add electron dependencies ([f506c0c](https://github.com/sourcygen/electron-angular-quick-start/commit/f506c0c2ab613ec0d72863f5a30c2c1ce553dcd2))
- add electron e2e launch scripts ([7e02b37](https://github.com/sourcygen/electron-angular-quick-start/commit/7e02b37b10f54f7bbb66e88f7e433ba67594287b))
- add electron packaging scripts ([afd8916](https://github.com/sourcygen/electron-angular-quick-start/commit/afd8916d7143b258ed273d613f15135f91cb8edd))
- add spectron and utility dependencies ([a100e3c](https://github.com/sourcygen/electron-angular-quick-start/commit/a100e3c488fde1cc2d60229f47032331b201f7b5))
- angular upgrade : 9.1.1 => 10.1.3 ([b3a22e8](https://github.com/sourcygen/electron-angular-quick-start/commit/b3a22e8023b56d2e9707b98ec871c496d054a74d))
- change project structure to meet targeted architecture ([9c8788f](https://github.com/sourcygen/electron-angular-quick-start/commit/9c8788fb2e419ae63c3a6545f4c5966547232702))
- change project structure to meet targeted architecture ([ea90fd8](https://github.com/sourcygen/electron-angular-quick-start/commit/ea90fd845f8188c5fd4f867d7ec7f80ffd1b6e3f))
- conventional commit setup ([4a0397f](https://github.com/sourcygen/electron-angular-quick-start/commit/4a0397f56e10e6e88312eeda2f9716d4314b1ea0))
- decrease security in e2e tests ([8543cf1](https://github.com/sourcygen/electron-angular-quick-start/commit/8543cf148c498caa3e3298d8f08b14d16b5426b0))
- electron upgrade : 8.2.3 => 10.1.3 ([c53b0d4](https://github.com/sourcygen/electron-angular-quick-start/commit/c53b0d497ea5d0823d425b445449cff2a9c1ddc7))
- env config setup ([8822440](https://github.com/sourcygen/electron-angular-quick-start/commit/8822440f7dfa4452b588520cca5179121b276188))
- i18n setup with ngx-translate ([f17719c](https://github.com/sourcygen/electron-angular-quick-start/commit/f17719c7e8d4c7798b299a6d500712f903ddda3e))
- icon settings ([720223e](https://github.com/sourcygen/electron-angular-quick-start/commit/720223ec7ff4984445dcb52fe06ffe3386756367))
- init electron e2e code source ([45a02e3](https://github.com/sourcygen/electron-angular-quick-start/commit/45a02e392c0fd755df33760db7f4adbbd31d9616))
- init new angular project with angular cli ([cae7f62](https://github.com/sourcygen/electron-angular-quick-start/commit/cae7f629aafe69edb9aaaa6907615e5a2138b05a))
- init shared code source ([647889c](https://github.com/sourcygen/electron-angular-quick-start/commit/647889cd70d8d334122ea33c376f8cb51cf3fe7d))
- log setup with winston ([fd598bb](https://github.com/sourcygen/electron-angular-quick-start/commit/fd598bb10de942869a857e8927831aa87f768024))
- move production dependencies into development dependencies ([47c74d0](https://github.com/sourcygen/electron-angular-quick-start/commit/47c74d015d130a15768be5e783b80f9bfcc97754))
- other dependencies upgrade ([5db39a1](https://github.com/sourcygen/electron-angular-quick-start/commit/5db39a1f8b7135d1ed668dd4a77674bbfd9f4ef6))
- packaging config ([2559e97](https://github.com/sourcygen/electron-angular-quick-start/commit/2559e973dcf1478f81e25d6acb7332f3edf91dcc))
- use npm instead of yarn (issues with binaries) ([29e4dd9](https://github.com/sourcygen/electron-angular-quick-start/commit/29e4dd95bae61025faf820d141206deb81fdcf61))

## [1.0.1](https://github.com/sourcygen/electron-angular-quick-start/compare/v1.0.0...v1.0.1) (2020-04-30)

### Bug Fixes

- reopening window crash on macos ([f442df7](https://github.com/sourcygen/electron-angular-quick-start/commit/f442df72c4120fb616d21c5c4e245a5eb478f57e))

# 1.0.0 (2020-04-30)

### Features

- disable remote content execution ([0c82cf4](https://github.com/sourcygen/electron-angular-quick-start/commit/0c82cf425930de7368debfbc6176a3ef8ed7591e))
- adapt angular part ([83301e0](https://github.com/sourcygen/electron-angular-quick-start/commit/83301e0fe7387e791d23f7c1d6cdaeb1f53e3cf4))
- adapt electron part ([73acf88](https://github.com/sourcygen/electron-angular-quick-start/commit/73acf88a079984e50c15e23e5ad0aa98b0a7c2a1))
- add electron dependencies ([f506c0c](https://github.com/sourcygen/electron-angular-quick-start/commit/f506c0c2ab613ec0d72863f5a30c2c1ce553dcd2))
- add electron e2e launch scripts ([7e02b37](https://github.com/sourcygen/electron-angular-quick-start/commit/7e02b37b10f54f7bbb66e88f7e433ba67594287b))
- add electron packaging scripts ([afd8916](https://github.com/sourcygen/electron-angular-quick-start/commit/afd8916d7143b258ed273d613f15135f91cb8edd))
- add spectron and utility dependencies ([a100e3c](https://github.com/sourcygen/electron-angular-quick-start/commit/a100e3c488fde1cc2d60229f47032331b201f7b5))
- change project structure to meet targeted architecture ([9c8788f](https://github.com/sourcygen/electron-angular-quick-start/commit/9c8788fb2e419ae63c3a6545f4c5966547232702))
- change project structure to meet targeted architecture ([ea90fd8](https://github.com/sourcygen/electron-angular-quick-start/commit/ea90fd845f8188c5fd4f867d7ec7f80ffd1b6e3f))
- decrease security in e2e tests ([8543cf1](https://github.com/sourcygen/electron-angular-quick-start/commit/8543cf148c498caa3e3298d8f08b14d16b5426b0))
- env config setup ([8822440](https://github.com/sourcygen/electron-angular-quick-start/commit/8822440f7dfa4452b588520cca5179121b276188))
- i18n setup with ngx-translate ([f17719c](https://github.com/sourcygen/electron-angular-quick-start/commit/f17719c7e8d4c7798b299a6d500712f903ddda3e))
- icon settings ([720223e](https://github.com/sourcygen/electron-angular-quick-start/commit/720223ec7ff4984445dcb52fe06ffe3386756367))
- init electron e2e code source ([45a02e3](https://github.com/sourcygen/electron-angular-quick-start/commit/45a02e392c0fd755df33760db7f4adbbd31d9616))
- init new angular project with angular cli ([cae7f62](https://github.com/sourcygen/electron-angular-quick-start/commit/cae7f629aafe69edb9aaaa6907615e5a2138b05a))
- init shared code source ([647889c](https://github.com/sourcygen/electron-angular-quick-start/commit/647889cd70d8d334122ea33c376f8cb51cf3fe7d))
- log setup with winston ([fd598bb](https://github.com/sourcygen/electron-angular-quick-start/commit/fd598bb10de942869a857e8927831aa87f768024))
- move production dependencies into development dependencies ([47c74d0](https://github.com/sourcygen/electron-angular-quick-start/commit/47c74d015d130a15768be5e783b80f9bfcc97754))
- packaging config ([2559e97](https://github.com/sourcygen/electron-angular-quick-start/commit/2559e973dcf1478f81e25d6acb7332f3edf91dcc))
