export type {
  ExtensionPoints,
  RenderExtensionPoints,
  RenderExtensions,
  RenderExtension,
  AllowedComponentsForRenderExtension,
  ArgumentsForExtension,
  InputForRenderExtension,
  ReturnTypeForExtension,
  StandardApi,
} from './extension-points';

export * from './components';
export type Components = typeof import('./components');

export {extend, renderReact, useExtensionInput} from './api';
