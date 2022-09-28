import {
  SmartGridExtensionPoint,
  SmartGridExtensionApi,
  SmartGridExtensionPointCallback,
} from './smart-grid-extension';

export type {SmartGridExtensionPoint} from './smart-grid-extension';

export type {ExtensionResult, RenderableExtensionCallback} from './types';

// Generic public interfaces combining all POS extension points.
export type ExtensionPoint = SmartGridExtensionPoint;

export type ExtensionApi = SmartGridExtensionApi;

export type ExtensionPointCallback = SmartGridExtensionPointCallback;
