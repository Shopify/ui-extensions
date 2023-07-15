import type {StandardApi} from '../standard/standard';
import type {I18n} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface ActionExtensionApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /* Utilities for translating content according to the current `localization` of the admin. */
  i18n: I18n;

  /**
   * Closes the extension. Calling this method is equivalent to the merchant clicking the "x" in the corner of the overlay.
   */
  close: () => void;
}
