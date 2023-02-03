import type {ExtensionPoints} from './extension-points';

export interface ShopifyGlobal {
  extend<ExtensionPoint extends keyof ExtensionPoints>(
    extensionPoint: ExtensionPoint,
    extend: ExtensionPoints[ExtensionPoint],
  ): void;
}
