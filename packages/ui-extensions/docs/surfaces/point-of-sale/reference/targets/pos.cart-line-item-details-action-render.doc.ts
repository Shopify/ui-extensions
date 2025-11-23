import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from cart line item menu items. Use this target for complex line item workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to detailed line item data through the Cart Line Item API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a cart line item action modal',
      'targets',
      'pos-cart-line-item-details-action-render',
    ),
    description:
      'Build a full-screen modal launched from cart line item menu items for complex item workflows. This example demonstrates creating modals with multiple screens and interactive components, enabling forms, multi-step processes, or detailed information displays with full line item data access.',
  },
  category: 'Targets',
  subCategory: 'Cart line item details',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-cart-line-item-details-action-menu-item-render',
    },
  ],
  type: 'Target',
};

export default data;
