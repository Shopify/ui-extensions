import type {StandardApi} from '../standard/standard';
import type {ExtensionPoint as AnyExtensionPoint} from '../../extension-points';
import {I18n} from '../../../checkout';

export enum EnabledCustomerSegmentationFeature {
  ProductsPurchasedOnTags,
  AggregateFilters,
}

export interface SegmentationTemplatesApi<
  ExtensionPoint extends AnyExtensionPoint,
> extends StandardApi<ExtensionPoint> {
  /** Enabled segmentation query language features given to the extension point. */
  enabledFeatures: EnabledCustomerSegmentationFeature;
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

type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;
