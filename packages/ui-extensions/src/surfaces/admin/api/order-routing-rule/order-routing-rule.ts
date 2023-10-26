import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

import {SaveMetafields} from './metafields';
import {Data} from './data';

export interface OrderRoutingRuleApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  saveMetafields: SaveMetafields;
  data: Data;
}
