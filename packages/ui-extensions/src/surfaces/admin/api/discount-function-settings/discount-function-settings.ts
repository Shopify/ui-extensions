import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

import {ApplyMetafieldChange} from './metafields';
import {DiscountFunctionSettingsData} from './launch-options';

export interface DiscountFunctionSettingsApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /**
   * Applies a change to the discount function settings.
   */
  applyMetafieldChange: ApplyMetafieldChange;
  data: DiscountFunctionSettingsData;
}
