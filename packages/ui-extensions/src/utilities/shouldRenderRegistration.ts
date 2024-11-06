export interface ShouldRenderRegistrationFunction<ExtensionPoints> {
  <Target extends keyof ExtensionPoints>(
    target: Target,
    callback: ExtensionPoints[Target],
  ): ExtensionPoints[Target];
}

export function createShouldRenderRegistrationFunction<
  ExtensionPoints,
>(): ShouldRenderRegistrationFunction<ExtensionPoints> {
  const extensionWrapper: ShouldRenderRegistrationFunction<ExtensionPoints> = (
    target,
    callback,
  ) => {
    (globalThis as any).shopify?.run(target, callback);
    return callback;
  };

  return extensionWrapper;
}
