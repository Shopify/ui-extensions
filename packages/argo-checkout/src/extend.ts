import type {ShopifyGlobal} from './globals';

export const extend: ShopifyGlobal['extend'] = (...args) =>
  ((self as any) as {shopify: ShopifyGlobal}).shopify.extend(...args);
