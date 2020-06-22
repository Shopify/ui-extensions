import type {ShopifyGlobal} from './globals';

export const extend: ShopifyGlobal['extend'] = (...args) =>
  self.shopify.extend(...args);
