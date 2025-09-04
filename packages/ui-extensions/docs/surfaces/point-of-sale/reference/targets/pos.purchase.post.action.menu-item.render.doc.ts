import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the post-purchase screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Menu item',
      'targets',
      'pos-purchase-post-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: 'pos-purchase-post-action-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostBlockRender,
      url: '../block/pos-purchase-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
