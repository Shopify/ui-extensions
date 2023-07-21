import type {StandardApi} from '../standard/standard';
import type {Data} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface BlockExtensionApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /**
   * Information about the currently viewed or selected items.
   */
  data: Data;
}
