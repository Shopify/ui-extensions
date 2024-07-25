import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the product details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Menu item',
      'targets',
      'product-details-menu-item',
    ),
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-action-render',
    },
    {
      name: ExtensionTargetType.PosProductDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-block-render',
    },
    {
      name: 'ProductAPI',
      url: '/docs/api/pos-ui-extensions/apis/product-api',
    },
  ],
  type: 'Target',
};

export default data;
