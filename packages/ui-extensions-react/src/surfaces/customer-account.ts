export {
  extend,
  extension,
  isConditionalStyle,
  isConditionalStyleWithDefault,
  Style,
} from '@shopify/ui-extensions/customer-account';
export type {
  ApiForExtension,
  ArgumentsForExtension,
  ExtensionTarget,
  ExtensionTargets,
  RenderExtension,
  RenderExtensionTarget,
  RunExtension,
  RunExtensionTarget,
  ReturnTypeForExtension,
  StandardApi,
  Language,
  Localization,
  I18nTranslate,
  I18n,
  FullPageApi,
} from '@shopify/ui-extensions/customer-account';

export * from './customer-account/components';
export * from './customer-account/hooks';
export {render, reactExtension} from './customer-account/render';
