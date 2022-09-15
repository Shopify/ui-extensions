import {ShopifyGlobal, EXTENSION_POINT} from './globals';
import * as PreviousTypes from './types-previous';
import * as Types from './types';

declare const shopify: ShopifyGlobal;

type Register = (
  extend: (api: PreviousTypes.WebPixelAPI | Types.ExtensionApi) => void,
) => void;

export const register: Register = (extend) =>
  shopify.extend(EXTENSION_POINT, extend);
