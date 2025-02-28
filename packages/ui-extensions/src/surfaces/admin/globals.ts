import type {ExtensionTargets} from './extension-targets';

export type TargetApi<ExtensionTarget extends keyof ExtensionTargets> =
  Parameters<ExtensionTargets[ExtensionTarget]>[1];
