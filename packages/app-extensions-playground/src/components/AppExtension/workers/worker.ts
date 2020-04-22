import {
  ExtensionPoint,
  CallbackTypeForExtensionPoint,
  ExtractedInputFromRenderExtension,
  ShopifyApi,
} from '@shopify/app-extensions-renderer';
import {createRemoteRoot, RemoteChannel, retain} from '@shopify/remote-ui-core';

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
  try {
    new URL(script);
  } catch (_) {
    eval(script);
    return;
  }

  if (!script.match(/\.js$/)) {
    return;
  }

  importScripts(script);
}

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  input: ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>,
  components: string[],
  channel: RemoteChannel,
) {
  if (!registeredExtensions.has(extensionPoint)) {
    return false;
  }

  retain(input);
  retain(channel);

  const callback = registeredExtensions.get(extensionPoint)!;

  return callback(createRemoteRoot(channel, {components: components as any}), input);
}
