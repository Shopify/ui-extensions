import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the product details action menu. Use this target for product-specific operations like inventory adjustments, product analytics, or integration with external product management systems.' +
    '\n\nExtensions at this target can access the product identifier through the Product API to perform product-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete product workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Show a product action menu item',
      'targets',
      'product-details-menu-item',
    ),
    description:
      'Create an action menu item on product detail screens. This example demonstrates rendering a button in the product action menu for operations like inventory adjustments, product analytics, or integration with external product management systems.',
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-action-render',
    },
  ],
  type: 'Target',
};

export default data;
