import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {Data} from '../shared';

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
