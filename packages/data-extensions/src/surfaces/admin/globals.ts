import type {ExtensionTargets} from './extension-targets';

export interface ShopifyGlobal {
  dataExtension<ExtensionTarget extends keyof ExtensionTargets>(
    target: ExtensionTarget,
    callback: ExtensionTargets[ExtensionTarget],
  ): void;
}
