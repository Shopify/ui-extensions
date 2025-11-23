import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCartLineItemDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from cart line item menu items. Use this target for complex line item workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to detailed line item data through the Cart Line Item API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a cart line item action modal',
      'targets',
      'pos-cart-line-item-details-action-render',
    ),
    description:
      'Build a full-screen modal workflow launched from a cart line item action menu item. This example demonstrates creating line item-specific experiences with multi-step processes, forms, and detailed line item data access for operations like customization or verification.',
  },
  category: 'Targets',
  subCategory: 'Cart line item',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCartLineItemDetailsActionMenuItemRender,
      url: 'pos-cart-line-item-details-action-menu-item-render',
    },
  ],
  type: 'Target',
};

export default data;
