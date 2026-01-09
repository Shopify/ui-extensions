import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface ToolsDataApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {}
