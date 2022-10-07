import type {StandardApi as BaseStandardApi} from '../../../../api';
import type {ExtensionPoint as AnyExtensionPoint} from '../../extension-points';

export interface StandardApi<ExtensionPoint extends AnyExtensionPoint>
  extends BaseStandardApi {
  readonly surface: 'admin';
  readonly extensionPoint: ExtensionPoint;
}
