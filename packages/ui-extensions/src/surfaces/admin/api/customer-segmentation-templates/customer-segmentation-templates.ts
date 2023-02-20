import type {StandardApi} from '../standard/standard';
import type {ExtensionPoint as AnyExtensionPoint} from '../../extension-points';

export interface SegmentationTemplatesApi<ExtensionPoint extends AnyExtensionPoint> 
  extends StandardApi<ExtensionPoint> {
  /** Enabled segmentation query language features given to the extension point. */
  enabledFeatures: EnabledCustomerSegmentationFeatures
}

export enum EnabledCustomerSegmentationFeatures {
  ProductsPurchasedOnTags,
  AggregateFilters,
}

export type SegmentationTemplatesRenderResult = ValueOrPromise<{
  title: string;
  description: string;
  polarisIcon: any
  segmentQueryTemplate: string;
  segmentQueryToInsert: string;
}[]>;

type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;
