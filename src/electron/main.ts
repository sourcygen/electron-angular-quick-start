import * as fs from 'fs-extra';
import * as _ from 'lodash';
import * as path from 'path';
import { App } from './components/app';

declare const global: any;
declare const __static: string;

// Load config
const currentEnv = process.env.X_NODE_ENV || process.env.NODE_ENV;
const appConfig =
  currentEnv === 'development'
    ? fs.readJsonSync(path.join(__static, 'config.json'))
    : fs.readJsonSync(path.join(__dirname, 'static/config.json'));
const defaultConf = appConfig.development;
const currentConf = appConfig[currentEnv];
global.gConfig = _.merge(defaultConf, currentConf);

// Launch app
App.launch();
