import {createRemoteComponent} from '@shopify/remote-ui-core';
import {load, api, renderFactory, RenderRoot} from '@shopify/app-extensions-renderer';

Reflect.defineProperty(self, 'shopify', {
  value: api,
  configurable: false,
});

const render = renderFactory({
  [RenderRoot.Default]: [createRemoteComponent('Text')],
});

export {load, render};
