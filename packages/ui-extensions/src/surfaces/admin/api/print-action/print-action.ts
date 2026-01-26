import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {Data} from '../shared';

/**
 * The `PrintActionExtensionApi` object provides methods for print action extensions that generate custom printable documents. Access these properties through the API to access selected resources for print configuration.
 */
export interface PrintActionExtensionApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /**
   * An array of currently viewed or selected resource identifiers. Use this to access the IDs of items to include in the print document, such as selected orders or products.
   */
  data: Data;
}
