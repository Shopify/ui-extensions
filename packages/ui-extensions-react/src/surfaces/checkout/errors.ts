import {ExtensionPoint} from '@shopify/ui-extensions/checkout';

export class CheckoutUIExtensionError extends Error {
  name = 'CheckoutUIExtensionError';
}

export class ScopeNotGrantedError extends Error {
  name = 'ScopeNotGrantedError';
}

export class ExtensionHasNoMethodError extends Error {
  name = 'ExtensionHasNoMethodError';

  constructor(method: string, extensionPoint: ExtensionPoint) {
    super(
      `Cannot call '${method}()' on extensionPoint '${extensionPoint}'. The corresponding property was not found on the API.`,
    );
  }
}
