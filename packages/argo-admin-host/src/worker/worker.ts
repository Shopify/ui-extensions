import {
  ExtensionPoint,
  ExtensionApi,
  ExtensionPointCallback,
  ShopifyApi,
} from '@shopify/argo-admin';
import {WorkerCreator} from '@remote-ui/web-workers';
import {createRemoteRoot, RemoteChannel, retain} from '@remote-ui/core';
import {endpoint as untypedEndpoint} from '@remote-ui/web-workers/worker';
import type {Endpoint} from '@remote-ui/rpc';

import {apply as applySandbox, Denylist, builtIns} from './sandbox';
import {makeApiFunctionsHotSwappable} from './hotswap';

const {importScripts, Function: _Function} = self as any;

const registeredExtensions = new Map<ExtensionPoint, ExtensionPointCallback[ExtensionPoint]>();

const endpoint: Endpoint<{reload(): void}> = untypedEndpoint as any;
endpoint.callable('reload');

type Api = ShopifyApi & {
  reload(): void;
};

const api: Api = {
  extend(extensionPoint, callback) {
    registeredExtensions.set(extensionPoint, callback);
  },
  reload() {
    endpoint.call.reload();
  },
};

Reflect.defineProperty(self, 'shopify', {
  value: api,
  configurable: false,
  enumerable: true,
  writable: false,
});

export function load(script: string, extraDenylist?: Denylist) {
  applySandbox(self, {...builtIns, ...extraDenylist});
  try {
    // eslint-disable-next-line no-new
    new URL(script);
  } catch (_) {
    new _Function(script)();
    return;
  }
  importScripts(script);
}

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  api: ExtensionApi[T],
  components: string[] | undefined,
  channel: RemoteChannel,
) {
  if (!registeredExtensions.has(extensionPoint)) {
    return false;
  }

  retain(channel);
  retain(api);

  makeApiFunctionsHotSwappable(api);

  const callback = registeredExtensions.get(extensionPoint)!;
  callback(
    createRemoteRoot(channel, {
      components: components as any,
    }),
    api as any,
  );

  return true;
}

interface WorkerAPI {
  load: typeof load;
  render: typeof render;
}
export type Worker = ReturnType<WorkerCreator<WorkerAPI>>;
