export interface DataRegistrationFunctionFunction<ExtensionPoints> {
  <Target extends keyof ExtensionPoints>(
    target: Target,
    callback: ExtensionPoints[Target],
  ): ExtensionPoints[Target];
}

export function createDataRegistrationFunction<
  ExtensionPoints,
>(): DataRegistrationFunctionFunction<ExtensionPoints> {
  const extensionWrapper: DataRegistrationFunctionFunction<ExtensionPoints> = (
    target,
    callback,
  ) => {
    (globalThis as any).shopify?.dataExtension(target, callback);
    return callback;
  };

  return extensionWrapper;
}
