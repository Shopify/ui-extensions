import {ExtensionPoint, ExtensionInput, ExtensionPointCallback, ShopifyApi} from '@shopify/argo';
import {WorkerCreator} from '@remote-ui/web-workers';
import {createRemoteRoot, RemoteChannel, retain} from '@remote-ui/core';

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

declare const importScripts: (script: string) => void;

export function load(script: string) {
  try {
    new URL(script);
  } catch (_) {
    eval(script);
    return;
  }
  importScripts(script);
}

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  input: ExtensionInput[T],
  components: string[],
  channel: RemoteChannel,
) {
  if (!registeredExtensions.has(extensionPoint)) {
    return false;
  }

  retain(channel);
  retain(input);

  const callback = registeredExtensions.get(extensionPoint)!;
  callback(
    createRemoteRoot(channel, {
      components: components as any,
    }),
    input as any,
  );

  return true;
}

interface WorkerAPI {
  load: typeof load;
  render: typeof render;
}
export type Worker = ReturnType<WorkerCreator<WorkerAPI>>;
