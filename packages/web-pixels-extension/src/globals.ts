import * as PreviousTypes from './types-previous';
import * as Types from './types';

export const EXTENSION_POINT = 'WebPixel::Render';

export interface ShopifyGlobal {
  extend(
    extensionPoint: typeof EXTENSION_POINT,
    extend: (api: PreviousTypes.WebPixelAPI | Types.ExtensionApi) => void,
  ): void;
}
