import type {StandardApi} from '../standard/standard';
import type {I18n} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/* List of enabled query language features during a progressive rollout */
type CustomerSegmentationFeature =
  /* Enables templates using filters only available when B2B is enabled. For example: companies IS NOT NULL */
  'b2bEnabled' | 'segmentByDistance';

export interface CustomerSegmentTemplateApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /* Utilities for translating content according to the current `localization` of the admin. */
  i18n: I18n;
  /** @private */
  __enabledFeatures: CustomerSegmentationFeature[];
}
