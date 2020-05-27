import {ExtensionPoint, ExtensionApi, ExtensionPointCallback, ShopifyApi} from '@shopify/argo';
import {WorkerCreator} from '@shopify/react-web-worker';
import {createRemoteRoot, RemoteChannel, retain} from '@shopify/remote-ui-core';

import {apply as applySandbox, Blacklist, builtIns} from './utilities/sandbox';

declare const importScripts: (script: string) => void;

const _importScripts = typeof importScripts !== 'undefined' ? importScripts : undefined;
const _eval = typeof eval !== 'undefined' ? eval : undefined;

const registeredExtensions = new Map<ExtensionPoint, ExtensionPointCallback[ExtensionPoint]>();

const api: ShopifyApi = {
  extend(extensionPoint, callback) {
    registeredExtensions.set(extensionPoint, callback);
  },
};

Reflect.defineProperty(self, 'shopify', {
  value: api,
  configurable: false,
  enumerable: true,
  writable: false,
});

export function load(script: string, extraBlacklist?: Blacklist) {
  applySandbox(self, {...builtIns, ...extraBlacklist});
  try {
    new URL(script);
  } catch (_) {
    _eval?.(script);
    return;
  }
  _importScripts?.(script);
}

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  api: ExtensionApi[T],
  components: string[],
  channel: RemoteChannel,
) {
  if (!registeredExtensions.has(extensionPoint)) {
    return false;
  }

  retain(channel);
  retain(api);

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
