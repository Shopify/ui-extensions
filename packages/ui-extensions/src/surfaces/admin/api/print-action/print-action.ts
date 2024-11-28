import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {Data} from '../shared';
import type {ResourcePickerApi} from '../resource-picker/resource-picker';

export interface PrintActionExtensionApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /**
   * Information about the currently viewed or selected items.
   */
  data: Data;

  /**
   * Renders the [Resource Picker](/docs/api/app-bridge-library/apis/resource-picker), allowing users to select a resource for the extension to use as part of its flow.
   */
  resourcePicker: ResourcePickerApi;
}
