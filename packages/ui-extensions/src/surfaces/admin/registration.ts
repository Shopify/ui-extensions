export interface RenderExtension<Api> {
  (root: HTMLElement, api: Api): Promise<() => void>;
}

export interface RunnableExtension<Api, Output> {
  (api: Api): Output | Promise<Output>;
}

export interface ExtensionRegistrationFunction<ExtensionTargets> {
  <Target extends keyof ExtensionTargets>(
    target: Target,
    implementation: ExtensionTargets[Target],
  ): ExtensionTargets[Target];
}

export interface ExtensionRegistrationFunctionWithRoot<ExtensionTargets> {
  <Target extends keyof ExtensionTargets>(
    target: Target,
    implementation: ExtensionTargets[Target],
  ): ExtensionTargets[Target];
}

/**
 * This function returns a type-safe registration function for rendering and non-rendering extensions.
 */
export function createExtensionRegistrationFunction<
  ExtensionTargets,
>(): ExtensionRegistrationFunctionWithRoot<ExtensionTargets> {
  const extensionWrapper: ExtensionRegistrationFunctionWithRoot<
    ExtensionTargets
  > = (target, implementation) => {
    async function extension(...args: any[]) {
      if (args.length === 1) {
        return (implementation as any)(...args);
      }

      const [root, api] = args as [HTMLElement, any];

      // Rendering extensions have two arguments and return a clean up function.
      let renderResult = (implementation as any)(root, api);

      if (
        typeof renderResult === 'object' &&
        renderResult != null &&
        'then' in renderResult
      ) {
        renderResult = await renderResult;
      }
      // Return a noop if no clean up function was returned
      return typeof renderResult === 'function' ? renderResult : () => {};
    }

    (globalThis as any).shopify?.extend(
      target,
      extension,
      '@ui_extension_version:__UI_EXTENSION_VERSION__@',
    );

    return extension as any;
  };

  return extensionWrapper;
}
