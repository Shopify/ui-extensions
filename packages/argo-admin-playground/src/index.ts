import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import yargs from 'yargs/yargs';
import {hideBin} from 'yargs/helpers';
import {log} from '@shopify/argo-admin-cli/utilities';
import {
  createClientConfig,
  run,
} from '@shopify/argo-admin-cli/server/utilities';

import scripts from './scripts';

const argv = yargs(hideBin(process.argv)).argv;
const port = 39355;
const publicPath = '/';
const sockPath = 'stats';
const hostUrl = argv.host ? argv.host : `http://localhost:${port}`;

const configs = scripts.map(
  ({label, path: entry, name, excludeFromManifest}) => {
    const filename = `${name}.js`;

    const webpackConfig = createClientConfig({
      entry: path.resolve(__dirname, entry),
      port,
      sockPath,
      output: {
        publicPath,
        filename,
      },
    });

    return {
      label,
      scriptPath: `${publicPath}${filename}`,
      webpackConfig,
      excludeFromManifest,
    };
  },
);

const webpackConfigs = configs.map(({webpackConfig}) => webpackConfig);
const availableScriptUrls = configs.map(
  ({label, scriptPath, excludeFromManifest}) => ({
    label,
    scriptUrl: `${hostUrl}${scriptPath}`,
    excludeFromManifest,
  }),
);
const manifest = availableScriptUrls.filter(
  ({excludeFromManifest}) => !excludeFromManifest,
);

run({
  configs: webpackConfigs,
  devServer: {
    port,
    sockPath,
    before(app) {
      app.use(bodyParser.json());
      app.use(cors());
      app.get('/', function (_, res) {
        res.json(manifest);
      });
    },
  },
  onReady: () => {
    log(`Available scripts:`);
    availableScriptUrls.forEach(({scriptUrl}) => log(scriptUrl));
    log(`| What's next?`);
    log(
      `| Open https://cdn.shopify.com/shopifycloud/web/assets/v1/argo-admin-playground.html`,
    );
  },
});
