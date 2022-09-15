import {ExtensionApi} from './types';

export const EXTENSION_POINT = 'WebPixel::Render';

export interface ShopifyGlobal {
  extend(
    extensionPoint: typeof EXTENSION_POINT,
    extend: (api: ExtensionApi) => void,
  ): void;
}
