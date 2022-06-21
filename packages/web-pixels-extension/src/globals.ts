import {RuntimeAPI} from './types/runtime-api';

export const EXTENSION_POINT = 'WebPixel::Render';

export interface ShopifyGlobal {
  extend(
    extensionPoint: typeof EXTENSION_POINT,
    extend: (api: RuntimeAPI) => void,
  ): void;
}
