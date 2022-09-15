import {ShopifyGlobal, EXTENSION_POINT} from './globals';
import {ExtensionApi} from './types';

declare const shopify: ShopifyGlobal;

type Register = (extend: (api: ExtensionApi) => void) => void;

export const register: Register = (extend) =>
  shopify.extend(EXTENSION_POINT, extend);
