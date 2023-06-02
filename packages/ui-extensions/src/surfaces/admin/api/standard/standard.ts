import type {StandardApi as BaseStandardApi} from '../../../../api';
import type {ExtensionPoint as AnyExtensionPoint} from '../../extension-points';

/**
 * The following APIs are provided to all extension points.
 */
export interface StandardApi<ExtensionPoint extends AnyExtensionPoint>
  extends BaseStandardApi {
  /**
   * The identifier of the running extension point.
   */
  extensionPoint: ExtensionPoint;
}
