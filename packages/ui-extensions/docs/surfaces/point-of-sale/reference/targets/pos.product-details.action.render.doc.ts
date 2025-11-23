import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from product details menu items. Use this target for complex product workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to product and cart data through the Product API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a product details action modal',
      'targets',
      'product-details-action',
    ),
    description:
      'Build a full-screen modal workflow launched from a product details action menu item. This example demonstrates creating product-specific experiences with multi-step processes, forms, and product data access for operations like inventory management or product customization.',
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
      url: 'pos-product-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosProductDetailsBlockRender,
      url: 'pos-product-details-block-render',
    },
    {
      name: 'ProductAPI',
      url: '../../apis/product-api',
    },
  ],
  type: 'Target',
};

export default data;
