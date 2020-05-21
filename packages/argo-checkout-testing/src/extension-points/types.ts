import {ExtensionPoints} from './extension-points';
import {RenderExtension} from './render-extension';

export type ReturnTypeForExtension<
  ID extends keyof ExtensionPoints
> = ReturnType<ExtensionPoints[ID]>;

export type ArgumentsForExtension<
  ID extends keyof ExtensionPoints
> = Parameters<ExtensionPoints[ID]>;

export type RenderExtensionPoint = {
  [ID in keyof ExtensionPoints]: ExtensionPoints[ID] extends RenderExtension<
    any,
    any
  >
    ? ID
    : never;
}[keyof ExtensionPoints];

export type RenderExtensions = {
  [ID in RenderExtensionPoint]: ExtensionPoints[ID];
};

export type RenderExtensionPoints = {
  [ID in keyof ExtensionPoints]: ExtensionPoints[ID] extends RenderExtension<
    any,
    any
  >
    ? ID
    : never;
}[keyof ExtensionPoints];

type ExtractedInputFromRenderExtension<T> = T extends RenderExtension<
  infer Input,
  any
>
  ? Input
  : never;

type ExtractedAllowedComponentsFromRenderExtension<
  T
> = T extends RenderExtension<any, infer Components> ? Components : never;

export type InputForRenderExtension<
  ID extends keyof RenderExtensions
> = ExtractedInputFromRenderExtension<RenderExtensions[ID]>;

export type AllowedComponentsForRenderExtension<
  ID extends keyof RenderExtensions
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[ID]>;
