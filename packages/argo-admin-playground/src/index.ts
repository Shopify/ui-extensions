import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import yargs from 'yargs/yargs';
import {hideBin} from 'yargs/helpers';
import {createClientConfig, run} from '@shopify/argo-admin-cli/server';
import {log} from '@shopify/argo-admin-cli/utilities';

interface Script {
  label: string;
  path: string;
}

const scripts: Script[] = [
  {
    label: 'Playground',
    path: './scripts/playground.tsx',
  },
  {
    label: 'Components List',
    path: './scripts/components-list/index.tsx',
  },
  {
    label: 'Inline Script',
    path: './scripts/inline-script.tsx',
  },
  {
    label: 'Use Form',
    path: './scripts/use-form.tsx',
  },
  {
    label: 'Vanilla',
    path: './scripts/vanilla.ts',
  },
];

const argv = yargs(hideBin(process.argv)).argv;
const port = 39355;
const publicPath = '/';
const sockPath = 'stats';
const hostUrl = argv.host ? argv.host : `http://localhost:${port}`;

const configs = scripts.map(({label, path: entry}) => {
  const fileExtension = path.extname(entry);
  const filename = `3p-${path.basename(entry, fileExtension)}.worker.js`;

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
  };
});

const webpackConfigs = configs.map(({webpackConfig}) => webpackConfig);
const manifest = configs.map(({label, scriptPath}) => ({
  label,
  scriptUrl: `${hostUrl}${scriptPath}`,
}));

run(
  webpackConfigs,
  {
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
  () => {
    log(`Available scripts:`);
    manifest.forEach(({scriptUrl}) => log(scriptUrl));
    log(`| What's next?`);
    log(`| Open https://cdn.shopify.com/shopifycloud/web/assets/v1/argo-admin-playground.html`);
  },
);
