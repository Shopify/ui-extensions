import {
  ExtensionPoint,
  CallbackTypeForExtensionPoint,
  DataTypeForExtensionCallback,
  ShopifyApi,
} from '@shopify/app-extensions-renderer';
import {createRemoteRoot, RemoteChannel} from '@shopify/remote-ui-core';

const registeredExtensions = new Map<
  ExtensionPoint,
  CallbackTypeForExtensionPoint<ExtensionPoint>
>();

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
  importScripts(script);
}

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  data: DataTypeForExtensionCallback<CallbackTypeForExtensionPoint<T>>,
  components: string[],
  channel: RemoteChannel,
) {
  if (!registeredExtensions.has(extensionPoint)) {
    return false;
  }

  const callback = registeredExtensions.get(extensionPoint)!;

  return callback(createRemoteRoot(channel, {components: components as any}), data);
}
