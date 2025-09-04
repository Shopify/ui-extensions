import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostBlockRender,
  description:
    'Renders a custom section within the native post purchase screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Block',
      'targets',
      'pos-purchase-post-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Block',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
      url: '../action/pos-purchase-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: '../action/pos-purchase-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
