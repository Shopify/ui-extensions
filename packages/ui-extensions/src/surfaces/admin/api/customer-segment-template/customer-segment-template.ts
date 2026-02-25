import type {StandardApi} from '../standard/standard';
import type {I18n} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/**
 * The `CustomerSegmentTemplateApi` object provides methods for creating customer segment templates. Access the following properties on the `CustomerSegmentTemplateApi` object to build templates with translated content.
 */
export interface CustomerSegmentTemplateApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /** Utilities for translating template content into the merchant's language. */
  i18n: I18n;
  /** @private */
  __enabledFeatures: string[];
}
