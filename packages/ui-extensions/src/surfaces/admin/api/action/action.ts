import type {StandardApi} from '../standard/standard';
import type {Data} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface ActionExtensionApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /**
   * Closes the extension. Calling this method is equivalent to the merchant clicking the "x" in the corner of the overlay.
   */
  close: () => void;

  /**
   * Information about the currently viewed or selected items.
   */
  data: Data;
}