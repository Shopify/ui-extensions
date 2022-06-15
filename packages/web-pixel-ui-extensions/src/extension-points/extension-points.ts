import {RenderExtension} from './render-extension';
import type {WebPixelApi} from './web-pixel-api';
// Eventually, the api types will come from:
// import type {PixelApi} from '@shopify/web-pixel-types';

/**
 * A UI extension will register for one or more extension points using `shopify.extend()`.
 * An extension point in a UI extension is a plain JavaScript function.
 * This function receives some API for interacting with the application,
 * and is expected to return a value in a specific shape.
 * The input arguments and the output type are different
 * for each extension point.
 */
export interface ExtensionPoints {
  'WebPixel::Render': RenderExtension<WebPixelApi>;
}

export type ExtensionPoint = keyof ExtensionPoints;
