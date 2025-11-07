import {StandardRenderingExtensionApi} from '../standard/standard-rendering';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {Data} from '../shared';

export interface PrintActionExtensionApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardRenderingExtensionApi<ExtensionTarget> {
  /**
   * Information about the currently viewed or selected items.
   */
  data: Data;
}
