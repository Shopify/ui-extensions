import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsBlockRender,
  description: 'Renders a custom section within the product details screen',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Block',
      'targets',
      'pos-product-details-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Block',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
      url: '../action/pos-product-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosProductDetailsActionRender,
      url: '../action/pos-product-details-action-render',
    },
    {
      name: 'ProductAPI',
      url: '../../apis/product-api',
    },
  ],
  type: 'Target',
};

export default data;
