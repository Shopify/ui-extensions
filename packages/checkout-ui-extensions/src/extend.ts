import type {ShopifyGlobal} from './globals';
/**
 * The most important API to a UI extension is `shopify`,
 * an object that is globally available.
 * This object has a single method, extend. extend takes two arguments:
 * the name of an available extension point, and a function to call when Shopify
 * is ready to run the extension point.
 */
export const extend: ShopifyGlobal['extend'] = (...args) =>
  (self as any as {shopify: ShopifyGlobal}).shopify.extend(...args);
