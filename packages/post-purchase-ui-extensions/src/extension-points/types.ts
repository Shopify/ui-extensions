import {ExtensionPoints} from './extension-points';
import {RenderExtension} from './render-extension';

/**
 * For a given extension point, returns the value that is expected to be
 * returned by that extension point’s callback type.
 */
export type ReturnTypeForExtension<
  ID extends keyof ExtensionPoints
> = ReturnType<ExtensionPoints[ID]>;

/**
 * For a given extension point, returns the tuple of arguments that would
 * be provided to that extension point’s callback type.
 */
export type ArgumentsForExtension<
  ID extends keyof ExtensionPoints
> = Parameters<ExtensionPoints[ID]>;

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
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [ID in RenderExtensionPoint]: ExtensionPoints[ID];
};

type ExtractedInputFromRenderExtension<T> = T extends RenderExtension<
  infer Input,
  any
>
  ? Input
  : never;

type ExtractedAllowedComponentsFromRenderExtension<
  T
> = T extends RenderExtension<any, infer Components> ? Components : never;

/**
 * For a given rendering extension point, returns the input type that the
 * extension point will receive. This input type is the second argument to
 * the callback for that extension point (the first callback for all rendering
 * extension points is the same — they all receive a `RemoteRoot` object)
 */
export type InputForRenderExtension<
  ID extends keyof RenderExtensions
> = ExtractedInputFromRenderExtension<RenderExtensions[ID]>;

/**
 * For a given rendering extension point, returns the UI extension components that the
 * extension point supports.
 */
export type AllowedComponentsForRenderExtension<
  ID extends keyof RenderExtensions
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[ID]>;
