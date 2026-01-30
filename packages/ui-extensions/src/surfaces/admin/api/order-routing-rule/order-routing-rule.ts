import type {StandardRenderingExtensionApi} from '../standard/standard-rendering';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

import {ApplyMetafieldsChange} from './metafields';
import {Data} from './data';

export interface OrderRoutingRuleApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardRenderingExtensionApi<ExtensionTarget> {
  applyMetafieldsChange: ApplyMetafieldsChange;
  data: Data;
}
