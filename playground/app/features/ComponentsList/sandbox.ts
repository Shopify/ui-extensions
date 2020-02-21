import {load, api, renderFactory, RenderRoot} from '@shopify/app-extensions-renderer';
import {Card, Stack, TextField, Text} from '@shopify/app-extensions-polaris-components/dist/client';

Reflect.defineProperty(self, 'shopify', {
  value: api,
  configurable: false,
});

const render = renderFactory({
  [RenderRoot.Default]: [Card, Stack, TextField, Text],
});

export {load, render};
