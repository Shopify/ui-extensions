import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from product details menu items. Use this target for complex product workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to product and cart data through the Product API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock('Action', 'targets', 'product-details-action'),
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosProductDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-product-details-action-menu-item-render',
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
