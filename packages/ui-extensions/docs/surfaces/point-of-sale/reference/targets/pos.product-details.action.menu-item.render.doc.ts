import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the product details screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Menu item',
      'targets',
      'product-details-menu-item',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionRender,
      url: 'pos-product-details-action-render',
    },
    {
      name: ExtensionTargetType.PosProductDetailsBlockRender,
      url: '../block/pos-product-details-block-render',
    },
    {
      name: 'ProductAPI',
      url: '../../apis/product-api',
    },
  ],
  type: 'Target',
};

export default data;
