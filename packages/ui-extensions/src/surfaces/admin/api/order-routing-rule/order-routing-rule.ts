import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

import {ApplyMetafieldsChange} from './metafields';
import {Data} from './data';

/**
 * The `OrderRoutingRuleApi` object provides methods for configuring order routing rules. Access these properties through the API to manage rule settings and metafields.
 */
export interface OrderRoutingRuleApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /** Updates or removes [metafields](/docs/apps/build/metafields) that store order routing rule configuration. */
  applyMetafieldsChange: ApplyMetafieldsChange;
  /** The order routing rule being configured, including its metadata and associated [metafields](/docs/apps/build/metafields). */
  data: Data;
}
