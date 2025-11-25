import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the product details action menu. Use this target for product-specific operations like inventory adjustments, product analytics, or integration with external product management systems.' +
    '\n\nExtensions at this target can access the product identifier through the Product API to perform product-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion modal for complete product workflows.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a product details action menu item',
      'targets',
      'product-details-menu-item',
    ),
    description:
      'Add an interactive menu item to the product details action menu for product-specific operations. This example shows how to create a menu item that accesses product data and launches modal workflows for tasks like inventory adjustments, product analytics, or integration with external systems.',
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
