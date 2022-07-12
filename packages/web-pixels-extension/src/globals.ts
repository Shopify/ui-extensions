import {WebPixelAPI} from './types';

export const EXTENSION_POINT = 'WebPixel::Render';

export interface ShopifyGlobal {
  extend(
    extensionPoint: typeof EXTENSION_POINT,
    extend: (api: WebPixelAPI) => void,
  ): void;
}
