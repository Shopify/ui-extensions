import type {ExtensionTarget} from '../extension-targets';

export class CheckoutUIExtensionError extends Error {
  name = 'CheckoutUIExtensionError';
}

export class ScopeNotGrantedError extends Error {
  name = 'ScopeNotGrantedError';
}

export class ExtensionHasNoMethodError extends Error {
  name = 'ExtensionHasNoMethodError';

  constructor(method: string, target: ExtensionTarget) {
    super(
      `Cannot call '${method}()' on target '${target}'. The corresponding property was not found on the API.`,
    );
  }
}

export class ExtensionHasNoTargetError extends Error {
  name = 'ExtensionHasNoTargetError';

  constructor(method: string, target: ExtensionTarget) {
    // Note: this type of target is a common property specifying some
    // relevant UI element. It's not the extension target.
    super(
      `Cannot call '${method}()' on target '${target}'. Property 'target' is not found on the API.`,
    );
  }
}
