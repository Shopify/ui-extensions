import {RuntimeAPI} from './types/runtime-api';

type ExtensionPoint = 'WebPixel::Render';

export interface ShopifyGlobal {
  extend(
    extensionPoint: ExtensionPoint,
    extend: (api: RuntimeAPI) => void,
  ): void;
}
