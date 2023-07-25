import type {StandardApi as BaseStandardApi, I18n} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface Intents {
  /**
   * The URL that was used to launch the intent.
   */
  launchUrl?: string | URL;
}

export interface Navigation {
  /**
   * A method to navigate to a specific route.
   */
  navigate: (url: string | URL) => void;
}

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
