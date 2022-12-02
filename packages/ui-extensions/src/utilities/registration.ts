import {createRemoteRoot} from '@remote-ui/core';
import type {
  RenderExtension,
  RenderExtensionWithRemoteRoot,
} from '../extension';

export interface ExtensionRegistrationFunction<ExtensionPoints> {
  <Point extends keyof ExtensionPoints>(
    _extensionPoint: Point,
    extensionWithRemoteRoot: ExtensionPoints[Point] extends RenderExtension<
      infer Api,
      infer AllowedComponents
    >
      ? RenderExtensionWithRemoteRoot<Api, AllowedComponents>
      : ExtensionPoints[Point],
  ): ExtensionPoints[Point];
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
    _extensionPoint,
    extensionWithRemoteRoot,
  ) => {
    async function extension(...args: any[]) {
      // This handles extensions that do not take a `RemoteChannel` as their first argument.
      // This is true for ”non-rendering” extension points, like `Checkout::PostPurchase::ShouldRender`.
      if (
        args.length === 1 ||
        typeof args[0] !== 'object' ||
        args[0] == null ||
        !('channel' in args[0])
      ) {
        const result = await (extensionWithRemoteRoot as any)(...args);
        return result;
      }

      const [{channel, components}, ...rest] = args;

      const root = createRemoteRoot(channel, {components, strict: true});

      const result = await (extensionWithRemoteRoot as any)(root, ...rest);
      await root.mount();

      return result;
    }

    return extension as any;
  };

  return extensionWrapper;
}
