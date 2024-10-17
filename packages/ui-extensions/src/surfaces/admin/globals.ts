import type {ExtensionTargets} from './extension-targets';

export interface ShopifyGlobal {
  extend<ExtensionTarget extends keyof ExtensionTargets>(
    target: ExtensionTarget,
    extend: ExtensionTargets[ExtensionTarget],
    version?: string,
  ): void;
}
