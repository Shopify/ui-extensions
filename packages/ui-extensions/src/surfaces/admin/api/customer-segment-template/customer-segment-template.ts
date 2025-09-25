import type {StandardApi} from '../standard/standard';
import type {I18n} from '../../../../api';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface CustomerSegmentTemplateApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /* Utilities for translating content according to the current `localization` of the admin. */
  i18n: I18n;
  /** @private */
  __enabledFeatures: string[];
}

export type CustomerStandardMetafieldDependency = 'facts.birth_date';
export interface CustomerSegmentTemplate {
  /**
   * The localized title of the template.
   */
  title: string;
  /**
   * The localized description of the template. An array can be used for multiple paragraphs.
   */
  description: string | string[];
  /**
   * The code snippet to render in the template with syntax highlighting. The `query` is not validated in the template.
   */
  query: string;
  /**
   * The code snippet to insert in the segment editor. If missing, `query` will be used. The `queryToInsert` is not validated in the template.
   */
  queryToInsert: string;
  /**
   * The list of customer standard metafields or custom metafields used in the template's query.
   */
  dependencies?: {
    standardMetafields?: CustomerStandardMetafieldDependency[];
    customMetafields?: string[];
  };
  /**
   * ISO 8601-encoded date and time string. A "New" badge will be rendered for templates introduced in the last month.
   */
  createdOn: string;
}
