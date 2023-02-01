import {createRemoteRoot} from '@remote-ui/core';
import type {
  RenderExtensionConnection,
  RenderExtension,
  RenderExtensionWithRemoteRoot,
} from '../extension';

export interface ExtensionRegistrationFunction<ExtensionPoints> {
  <Target extends keyof ExtensionPoints>(
    target: Target,
    implementation: ExtensionPoints[Target],
  ): ExtensionPoints[Target];
}

export interface ExtensionRegistrationFunctionWithRoot<ExtensionPoints> {
  <Target extends keyof ExtensionPoints>(
    target: Target,
    implementation: ExtensionPoints[Target] extends RenderExtension<
      infer Api,
      infer Components
    >
      ? RenderExtensionWithRemoteRoot<Api, Components>
      : ExtensionPoints[Target],
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
>(): ExtensionRegistrationFunctionWithRoot<ExtensionPoints> {
  const extensionWrapper: ExtensionRegistrationFunctionWithRoot<
    ExtensionPoints
  > = (target, implementation) => {
    async function extension(...args: any[]) {
      // Rendering extensions have two arguments. Non-rendering extensions don’t have
      // a `RemoteChannel` that needs to be normalized, so we can just pass the arguments
      // through.
      if (args.length === 1) {
        return (implementation as any)(...args);
      }

      const [{channel, components}, api] = args as [
        RenderExtensionConnection,
        any,
      ];

      const root = createRemoteRoot(channel, {
        components,
        strict: true,
      });

      let renderResult = (implementation as any)(root, api);

      if (
        typeof renderResult === 'object' &&
        renderResult != null &&
        'then' in renderResult
      ) {
        renderResult = await renderResult;
      }

      root.mount();

      return renderResult;
    }

    (globalThis as any).shopify?.extend(target, extension);

    return extension as any;
  };

  return extensionWrapper;
}
