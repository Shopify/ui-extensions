import bodyParser from 'body-parser';
import cors from 'cors';
import getPort from 'get-port';
import {merge} from 'lodash';

import {log} from '../utilities';

import {createClientConfig, createHostConfig, run} from './utilities';

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
}

export async function server(config: ServerConfig) {
  const {entry, env, apiKey, uuid = '', name = 'Argo Extension', resourceUrl, type, shop} = config;
  const port = await getPort({port: config.port});
  const sockPath = 'stats';
  const publicPath = '/assets/';
  const filename = 'extension.js';
  const serverUrl = `http://localhost:${port}`;
  const scriptUrl = `${publicPath}${filename}`;
  const isLegacyCli = !shop || !apiKey;

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
        };

        let manifestWithAdditionalMobileData = {};

        function withRoutes(req) {
          const protocol = req.headers['x-forwarded-proto'] || req.protocol;
          const host = req.headers.host;

          const origin = `${protocol}://${host}`;
          return {
            scriptUrl: `${origin}${publicPath}${filename}`,
            stats: `${origin}/${sockPath}`,
            mobile: `${origin}/mobile`,
          };
        }

        app.get('/data', function (req, res) {
          res.json({
            ...manifest,
            ...withRoutes(req),
          });
        });

        app.post('/mobile', function (req, res) {
          const {app, resourceUrl} = req.body;
          manifestWithAdditionalMobileData = merge({}, manifest, {app, resourceUrl});
          res.json({});
        });

        app.get('/mobile', function (req, res) {
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
      log(
        `| Open extension on your development store using https://${shop}/admin/extensions-dev?url=https://TUNNEL-URL/data`,
      );
    },
  });
}
