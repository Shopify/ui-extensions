import type {RenderExtensionTargets} from './render/extension-targets';
import type {EventExtensionTargets} from './event/extension-targets';

export interface ExtensionTargets
  extends RenderExtensionTargets,
    EventExtensionTargets {}

export type ExtensionTarget = keyof ExtensionTargets;
