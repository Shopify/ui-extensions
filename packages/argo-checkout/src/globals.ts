import type {ExtensionPoints} from './extension-points';

export interface ShopifyGlobal {
  extend<ExtensionPoint extends keyof ExtensionPoints>(
    extensionPoint: ExtensionPoint,
    extend: ExtensionPoints[ExtensionPoint],
  ): void;
  reload(): void;
}

declare global {
  interface WorkerGlobalScope {
    readonly le_shopify: ShopifyGlobal;
  }
}
