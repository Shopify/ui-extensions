import {Navigation} from './api';
import type {ExtensionTargets} from './extension-targets';

export interface ShopifyGlobal {
  extend<ExtensionTarget extends keyof ExtensionTargets>(
    target: ExtensionTarget,
    extend: ExtensionTargets[ExtensionTarget],
  ): void;
  reload(): void;
}

declare global {
  // @ts-expect-error - Intentionally overriding navigation type for POS context
  // This is safe as point-of-sale and customer-account are never used together
  const navigation: Navigation;
}
