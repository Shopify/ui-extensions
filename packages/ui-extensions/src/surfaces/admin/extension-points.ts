import type {RenderExtension, Extension} from '../../extension';

import type {AnyComponent} from './shared';
import type {
  StandardApi,
  SegmentationTemplatesApi,
  SegmentationTemplatesRenderResult,
} from './api';

export interface ExtensionPoints {
  Playground: RenderExtension<StandardApi<'Playground'>, AnyComponent>;
  'Admin::Customers::SegmentationTemplatesFirstTimeBuyers::Show': Extension<
    SegmentationTemplatesApi<'Admin::Customers::SegmentationTemplatesFirstTimeBuyers::Show'>,
    SegmentationTemplatesRenderResult
  >;
  'Admin::Customers::SegmentationTemplatesHighValue::Show': Extension<
    SegmentationTemplatesApi<'Admin::Customers::SegmentationTemplatesHighValue::Show'>,
    SegmentationTemplatesRenderResult
  >;
  'Admin::Customers::SegmentationTemplatesReEngage::Show': Extension<
    SegmentationTemplatesApi<'Admin::Customers::SegmentationTemplatesReEngage::Show'>,
    SegmentationTemplatesRenderResult
  >;
  'Admin::Customers::SegmentationTemplatesAbandonedCheckout::Show': Extension<
    SegmentationTemplatesApi<'Admin::Customers::SegmentationTemplatesAbandonedCheckout::Show'>,
    SegmentationTemplatesRenderResult
  >;
  'Admin::Customers::SegmentationTemplatesPurchaseBehaviour::Show': Extension<
    SegmentationTemplatesApi<'Admin::Customers::SegmentationTemplatesPurchaseBehaviour::Show'>,
    SegmentationTemplatesRenderResult
  >;
  'Admin::Customers::SegmentationTemplatesLocation::Show': Extension<
    SegmentationTemplatesApi<'Admin::Customers::SegmentationTemplatesLocation::Show'>,
    SegmentationTemplatesRenderResult
  >;
}

export type ExtensionPoint = keyof ExtensionPoints;

export type ExtensionForExtensionPoint<T extends ExtensionPoint> =
  ExtensionPoints[T];

/**
 * For a given extension point, returns the value that is expected to be
 * returned by that extension point’s callback type.
 */
export type ReturnTypeForExtension<ID extends keyof ExtensionPoints> =
  ReturnType<ExtensionPoints[ID]>;

/**
 * For a given extension point, returns the tuple of arguments that would
 * be provided to that extension point’s callback type.
 */
export type ArgumentsForExtension<ID extends keyof ExtensionPoints> =
  Parameters<ExtensionPoints[ID]>;

/**
 * A union type containing all of the extension points that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-ui/tree/main/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderExtensionPoint = {
  [ID in keyof ExtensionPoints]: ExtensionPoints[ID] extends RenderExtension<
    any,
    any
  >
    ? ID
    : never;
}[keyof ExtensionPoints];

/**
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [ID in RenderExtensionPoint]: ExtensionPoints[ID];
};

type ExtractedApiFromRenderExtension<T> = T extends RenderExtension<
  infer Api,
  any
>
  ? Api
  : never;

type ExtractedAllowedComponentsFromRenderExtension<T> =
  T extends RenderExtension<any, infer Components> ? Components : never;

/**
 * For a given rendering extension point, returns the type of the API that the
 * extension will receive at runtime. This API type is the second argument to
 * the callback for that extension point. The first callback for all of the rendering
 * extension points each receive a `RemoteRoot` object.
 */
export type ApiForRenderExtension<ID extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[ID]>;

/**
 * For a given rendering extension point, returns the UI components that the
 * extension point supports.
 */
export type AllowedComponentsForRenderExtension<
  ID extends keyof RenderExtensions,
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[ID]>;
