import type {StandardRenderingExtensionApi} from '../standard/standard-rendering';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

import {ApplyMetafieldChange} from './metafields';
import {ValidationData} from './launch-options';

export interface ValidationSettingsApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardRenderingExtensionApi<ExtensionTarget> {
  /**
   * Applies a change to the validation settings.
   */
  applyMetafieldChange: ApplyMetafieldChange;
  data: ValidationData;
}
