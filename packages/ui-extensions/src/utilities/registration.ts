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
    globalThis.shopify.extend(target, implementation);
    return implementation;
  };

  return extensionWrapper;
}
