import {ShopifyGlobal, EXTENSION_POINT} from './globals';
import * as Types from './types';

declare const shopify: ShopifyGlobal;

type Register = (extend: (api: Types.ExtensionApi) => void) => void;

export const register: Register = (extend) =>
  shopify.extend(EXTENSION_POINT, extend);
