import type {RemoteRoot, RemoteComponentType} from '@remote-ui/core';

import type {ExtensionPoints} from './extension-points';

/**
 * Registers your UI Extension to run for the selected extension point.
 *
 * @param target The extension point you are registering for.
 *
 * @param implementation The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension.
 */
export const extension = createExtensionRegistrationFunction<ExtensionPoints>();

/**
 * Registers your UI Extension to run for the selected extension point.
 *
 * @param target The extension point you are registering for.
 *
 * @param implementation The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension.
 */
export const extend = extension;

export interface RenderExtension<
  Api,
  AllowedComponents extends RemoteComponentType<
    string,
    any,
    any
  > = RemoteComponentType<any, any, any>,
> {
  (
    root: RemoteRoot<AllowedComponents, AllowedComponents>,
    api: Api,
  ): void | Promise<void>;
}

export interface ExtensionRegistrationFunction<ExtensionPoints> {
  <Target extends keyof ExtensionPoints>(
    target: Target,
    implementation: ExtensionPoints[Target],
  ): ExtensionPoints[Target];
}

/**
 * This function takes an extension function that is expecting a `RemoteRoot` as its
 * first argument, and returns a new function that accepts a `RemoteChannel` instead.
 * This is a convenience that allows the raw UI extension API to only expose the simpler
 * `RemoteChannel` type, while allowing the extension to use the more powerful `RemoteRoot`,
 * provided by a version of `@remote-ui/core` that the extension controls.
 */
export function createExtensionRegistrationFunction<
  ExtensionPoints,
>(): ExtensionRegistrationFunction<ExtensionPoints> {
  const extensionWrapper: ExtensionRegistrationFunction<ExtensionPoints> = (
    target,
    implementation,
  ) => {
    (globalThis as any).shopify?.extend(target, implementation);
    return implementation;
  };

  return extensionWrapper;
}
