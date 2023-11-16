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
    // conflicts with build/ts/globals.d.ts
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    readonly shopify: ShopifyGlobal;
  }
}
