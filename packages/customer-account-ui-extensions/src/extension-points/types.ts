import {RenderExtension, RunExtension} from './extension-signature';
import {ExtensionPoints} from './extension-points';

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
 * A union type containing all extension points that follow the pattern of
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
 * A union type containing all extension points that follow the pattern of
 * accepting an `api` argument, and using those arguments to run code that does not render anything, but instead return
 * a value or execute a side effect.
 */
export type RunExtensionPoint = {
  [ID in keyof ExtensionPoints]: ExtensionPoints[ID] extends RunExtension<
    any,
    any
  >
    ? ID
    : never;
}[keyof ExtensionPoints];

type ExtractedApiFromRenderExtension<T> = T extends RenderExtension<
  infer Api,
  any
>
  ? Api
  : never;

type ExtractedApiFromRunExtension<T> = T extends RunExtension<
  infer Api,
  unknown
>
  ? Api
  : never;

type ExtractedApiFromExtension<T> = T extends RenderExtension<any, any>
  ? ExtractedApiFromRenderExtension<T>
  : T extends RunExtension<any, any>
  ? ExtractedApiFromRunExtension<T>
  : never;

/**
 * For a given extension point, returns the type of the API that the
 * extension will receive at runtime.
 */
export type ApiForExtension<ID extends keyof ExtensionPoints> =
  ExtractedApiFromExtension<ExtensionPoints[ID]>;

/**
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [ID in RenderExtensionPoint]: ExtensionPoints[ID];
};

/**
 * For a given rendering extension point, returns the type of the API that the
 * extension will receive at runtime. This API type is the second argument to
 * the callback for that extension point. The first callback for all of the rendering
 * extension points each receive a `RemoteRoot` object.
 */
export type ApiForRenderExtension<ID extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[ID]>;
