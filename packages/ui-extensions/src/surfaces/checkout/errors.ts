/*
 * This will be fixed with https://github.com/Shopify/checkout-web/issues/44331
 */

export class ScopeNotGrantedError extends Error {
  name = 'ScopeNotGrantedError';
}
export class ExtensionHasNoMethodError extends Error {
  name = 'ExtensionHasNoMethodError';
}
export class ExtensionHasNoTargetError extends Error {
  name = 'ExtensionHasNoTargetError';
}
