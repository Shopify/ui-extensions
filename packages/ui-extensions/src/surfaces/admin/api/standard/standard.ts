import type {StandardApi as BaseStandardApi, I18n} from '../../../../api';
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
  i18n: I18n;
}
