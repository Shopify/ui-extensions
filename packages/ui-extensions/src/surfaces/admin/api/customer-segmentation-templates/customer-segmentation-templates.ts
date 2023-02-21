import type {StandardApi} from '../standard/standard';
import type {ExtensionPoint as AnyExtensionPoint} from '../../extension-points';

type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;

export enum CustomerSegmentationFeature {
  ProductsPurchasedOnTags,
  AggregateFilters,
}

export interface SegmentationTemplatesApi<
  ExtensionPoint extends AnyExtensionPoint,
> extends StandardApi<ExtensionPoint> {
  /** Enabled segmentation query language features given to the extension point. */
  enabledFeatures: [CustomerSegmentationFeature];
  /** Utilities for translating content according to the current `localization` of the admin. */
  i18n: I18n;
}

export type SegmentationTemplatesRenderResult = ValueOrPromise<
  {
    title: string;
    description: string;
    polarisIcon: string;
    segmentQueryTemplate: string;
    segmentQueryToInsert: string;
  }[]
>;

export interface I18n {
  /**
   * Returns translated content in the merchant's locale,
   * as supported by the extension.
   *
   * - `options.count` is a special numeric value used in pluralization.
   * - The other option keys and values are treated as replacements for interpolation.
   * - If the replacements are all primitives, then `translate()` returns a single string.
   * - If replacements contain UI components, then `translate()` returns an array of elements.
   */
  translate: I18nTranslate;
}

/**
 * This defines the i18n.translate() signature.
 */
export interface I18nTranslate {
  /**
   * This returns a translated string matching a key in a locale file.
   *
   * @example translate("banner.title")
   */
  <ReplacementType = string>(
    key: string,
    options?: {[placeholderKey: string]: ReplacementType | string | number},
  ): ReplacementType extends string | number
    ? string
    : (string | ReplacementType)[];
}
