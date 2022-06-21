import {ShopifyGlobal, EXTENSION_POINT} from './globals';
import {RuntimeAPI} from './types/runtime-api';

declare const shopify: ShopifyGlobal;

type Register = (extend: (api: RuntimeAPI) => void) => void;

export const register: Register = (extend) =>
  shopify.extend(EXTENSION_POINT, extend);
