import type {StandardApi} from '../standard/standard';
import type {I18n} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/* List of enabled query language features during a progressive rollout */
type CustomerSegmentationFeature =
  /* Allows merchants to segment on products purchased by tags. For example: products_purchased(tag: 'Red hats') = true */
  | 'productsPurchasedByTags'
  /* Enables count aggregates on functions. For example: shopify_email.opened(count_at_least: 5) = true */
  | 'aggregateFilters';

export interface CustomerSegmentationTemplateApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /* Utilities for translating content according to the current `localization` of the admin. */
  i18n: I18n;
  /** @private */
  __enabledFeatures: CustomerSegmentationFeature[];
}
