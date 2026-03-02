import type {ExtensionTargets} from './extension-targets';

/**
 * @publicDocs
 */
export interface ShopifyGlobal {
  extend<ExtensionTarget extends keyof ExtensionTargets>(
    extension: ExtensionTarget,
    extend: ExtensionTargets[ExtensionTarget],
  ): void;
}
