import fs from 'fs';

import bodyParser from 'body-parser';
import cors from 'cors';
import getPort from 'get-port';
import {merge} from 'lodash';

import {log} from '../utilities';

import {createClientConfig, createHostConfig, run} from './utilities';

const tunnelErrorHtml = fs.readFileSync(`${__dirname}/tunnel-error/index.html`, 'utf8').toString();

export interface ServerConfig {
  apiKey?: string;
  uuid?: string;
  entry: string;
  env?: string;
  port: number;
  type: string;
  resourceUrl?: string;
  name?: string;
  shop?: string;
  argoVersion?: string;
}

export async function server(config: ServerConfig) {
  const {
    entry,
    env,
    apiKey,
    uuid = '',
    name = 'Argo Extension',
    resourceUrl: externalResourceUrl,
    type,
    shop,
    argoVersion,
  } = config;
  const port = await getPort({port: config.port, host: '0.0.0.0'});
  const sockPath = 'stats';
  const dataPath = 'data';
  const mobilePath = 'mobile';
  const publicPath = '/assets/';
  const filename = 'extension.js';
  const serverUrl = `http://localhost:${port}`;
  const scriptUrl = `${publicPath}${filename}`;
  const isLegacyCli = !shop || !apiKey;
  const resourceUrl = normalizeResourceUrl(externalResourceUrl);

  const clientWebpackConfig = createClientConfig({
    entry,
    env,
    port,
    sockPath,
    output: {
      filename,
      publicPath,
    },
    disableLiveReload: isLegacyCli,
  });
  const hostWebpackConfig = createHostConfig({type, scriptUrl});

  run({
    configs: [clientWebpackConfig, hostWebpackConfig],
    devServer: {
      port,
      sockPath,
      before(app) {
        app.use(bodyParser.json());
        app.use(cors());

        const manifest = {
          apiKey,
          uuid,
          name,
          resourceUrl,
          identifier: type,
          resources: ['products', 'productVariant'],
          argoVersion,
        };

        let manifestWithAdditionalMobileData = {};

        function withRoutes(req) {
          const protocol = req.headers['x-forwarded-proto'] || req.protocol;
          const host = req.headers.host;

          const origin = `${protocol}://${host}`;
          return {
            scriptUrl: `${origin}${publicPath}${filename}`,
            stats: `${origin}/${sockPath}`,
            mobile: `${origin}/${mobilePath}`,
            data: `${origin}/${dataPath}`,
          };
        }

        if (!isLegacyCli) {
          app.get('/', function (req, res) {
            const protocol = req.headers['x-forwarded-proto'] || req.protocol;
            const host = req.headers.host;

            const isLocalHost = /(0.0.0.0|127.0.0.1|localhost)/.test(host || '');
            if (isLocalHost || protocol !== 'https') {
              res.send(tunnelErrorHtml);
            } else {
              res.redirect(`https://${shop}/admin/extensions-dev?url=https://${host}/${dataPath}`);
            }
          });
        }

        app.get(`/${dataPath}`, function (req, res) {
          res.json({
            ...manifest,
            ...withRoutes(req),
          });
        });

        app.post(`/${mobilePath}`, function (req, res) {
          const {app, resourceUrl} = req.body;
          manifestWithAdditionalMobileData = merge({}, manifest, {app, resourceUrl});
          res.json({});
        });

        app.get(`/${mobilePath}`, function (req, res) {
          res.json({
            version: 1,
            payload: {
              ...manifestWithAdditionalMobileData,
              ...withRoutes(req),
            },
          });
        });
      },
    },
    onReady: () => {
      if (isLegacyCli) {
        log(`Your extension is available at ${serverUrl}`);
        return;
      }

      log(`Started dev server on ${serverUrl}`);
      log(`| What's next?`);
      log(`| Run shopify tunnel start --port=${port}`);
      log(`| Open the tunnel url`);
    },
  });
}

function normalizeResourceUrl(resourceUrl: string | undefined) {
  if (!resourceUrl) return undefined;
  const normalizedResourceUrl = resourceUrl.trim().replace(/^\//, '');
  if (/^admin\/.*/.test(normalizedResourceUrl)) {
    return `/${normalizedResourceUrl}`;
  }
  return `/admin/${normalizedResourceUrl}`;
}
