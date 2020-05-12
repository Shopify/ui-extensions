import type {} from '../extension-points';

export const extend: typeof self.shopify.extend = (...args) =>
  self.shopify.extend(...args);
