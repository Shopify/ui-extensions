import {createRemoteRoot} from '@remote-ui/core';

import type {
  RenderExtensionConnection,
  RenderExtension,
  RenderExtensionWithRemoteRoot,
} from '../extension';

export interface ExtensionRegistrationFunction<ExtensionTargets> {
  <Target extends keyof ExtensionTargets>(
    target: Target,
    implementation: ExtensionTargets[Target],
  ): ExtensionTargets[Target];
}

export interface ExtensionRegistrationFunctionWithRoot<ExtensionTargets> {
  <Target extends keyof ExtensionTargets>(
    target: Target,
    implementation: ExtensionTargets[Target] extends RenderExtension<
      infer Api,
      infer Components
    >
      ? RenderExtensionWithRemoteRoot<Api, Components>
      : ExtensionTargets[Target],
  ): ExtensionTargets[Target];
}

/**
 * This function takes an extension function that is expecting a `RemoteRoot` as its
 * first argument, and returns a new function that accepts a `RemoteChannel` instead.
 * This is a convenience that allows the raw UI extension API to only expose the simpler
 * `RemoteChannel` type, while allowing the extension to use the more powerful `RemoteRoot`,
 * provided by a version of `@remote-ui/core` that the extension controls.
 */
export function createExtensionRegistrationFunction<
  ExtensionTargets,
>(): ExtensionRegistrationFunctionWithRoot<ExtensionTargets> {
  const extensionWrapper: ExtensionRegistrationFunctionWithRoot<
    ExtensionTargets
  > = (target, implementation) => {
    async function extension(...args: any[]) {
      const baseTarget = target.toString().split('~')[0];
      const extensionHandle = target.toString().split('~')[1];

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

      let renderResult = (implementation as any)(root, {
        ...api,
        data: {
          ...api.data,
          fetch: async () => {
            const response = await fetch(
              `app:/extension-prefetch/${extensionHandle}`,
            );
            const data = await response.json();
            return data;
          },
          prefetched: null,
        },
      });

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
