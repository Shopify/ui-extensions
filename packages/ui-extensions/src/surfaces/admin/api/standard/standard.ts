import type {
  StandardApi as BaseStandardApi,
  I18n,
  Intents,
  Navigation,
} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/**
 * The following APIs are provided to all extension targets.
 */
export interface StandardApi<ExtensionTarget extends AnyExtensionTarget>
  extends BaseStandardApi {
  /**
   * The identifier of the running extension target.
   */
  extension: {
    target: ExtensionTarget;
  };
  /**
   * Utilities for translating content according to the current localization of the admin.
   */
  i18n: I18n;
  /**
   * Provides information to the receiver the of an intent.
   */
  intents: Intents;
  /**
   * Provides methods to navigate to other features in the Admin.
   */
  navigation: Navigation;
}
