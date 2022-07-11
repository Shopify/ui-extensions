import {ShopifyGlobal, EXTENSION_POINT} from './globals';
import {WebPixelAPI} from './types/runtime-api';

declare const shopify: ShopifyGlobal;

type Register = (extend: (api: WebPixelAPI) => void) => void;

export const register: Register = (extend) =>
  shopify.extend(EXTENSION_POINT, extend);
