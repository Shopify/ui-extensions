import type {ExtensionTargets} from './extension-targets';

export interface ShopifyGlobal {
  dataExtension<ExtensionTarget extends keyof ExtensionTargets>(
    target: ExtensionTarget,
    callback: ExtensionTargets[ExtensionTarget],
  ): void;
}

declare global {
  interface WorkerGlobalScope {
    // conflicts with build/ts/globals.d.ts
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    readonly shopify: ShopifyGlobal;
  }
}
