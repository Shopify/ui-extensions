import type {PickerApi} from '../picker/picker';
import type {ResourcePickerApi} from '../resource-picker/resource-picker';
import type {StandardApi} from './standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface StandardRenderingExtensionApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /**
   * Renders the [Resource Picker](resource-picker), allowing users to select a resource for the extension to use as part of its flow.
   */
  resourcePicker: ResourcePickerApi;

  /**
   * Renders a custom [Picker](picker) dialog allowing users to select values from a list.
   */
  picker: PickerApi;
}
