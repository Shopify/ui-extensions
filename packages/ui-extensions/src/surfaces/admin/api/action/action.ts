import type {StandardApi} from '../standard/standard';
import type {I18n} from '../../../../api';
import type {ExtensionPoint as AnyExtensionPoint} from '../../extension-points';

export interface ActionExtensionApi<ExtensionPoint extends AnyExtensionPoint>
  extends StandardApi<ExtensionPoint> {
  /* Utilities for translating content according to the current `localization` of the admin. */
  i18n: I18n;

  /**
   * Closes the extension. This is only available for action extensions.
   */
  close: () => void;
}
