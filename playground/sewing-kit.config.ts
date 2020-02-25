/* eslint-env node */

import {Plugins} from '@shopify/sewing-kit';
import {resolve} from 'path';

export default function sewingKitConfig(plugins: Plugins) {
  return {
    name: 'app-extensions-playground',
    plugins: [
      plugins.cdn('http://localhost:8080/webpack/assets/'),
      plugins.devServer({
        ip: '192.168.64.1',
        port: 39355,
      }),
      plugins.webpack(config => {
        config.resolve.alias.react = resolve('./node_modules/react');

        return config;
      }),
    ],
  };
}
