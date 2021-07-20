import * as fs from "fs-extra";
import * as _ from "lodash";
import * as path from "path";
import { AppConfig } from "shared-lib";
import { App } from "./components/app";

declare const global: Global;

declare global {
  // Global augmentation of the `Global` interface
  interface Global {
    appConfig: AppConfig;
  }
}

// Load config
const currentEnv = process.env.X_NODE_ENV || process.env.NODE_ENV;
const appConfigs = fs.readJsonSync(path.join(__dirname, "config.json"));
const defaultConf = appConfigs.development;
const currentConf = appConfigs[currentEnv];
global.appConfig =
  currentEnv === "development"
    ? defaultConf
    : _.merge(defaultConf, currentConf);

// Launch app
App.launch();
