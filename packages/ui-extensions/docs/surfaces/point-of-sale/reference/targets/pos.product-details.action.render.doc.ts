import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosProductDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from product details menu items. Use this target for complex product workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to product and cart data through the Product API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a product details action modal',
      'targets',
      'product-details-action',
    ),
    description:
      'Build a full-screen modal launched from product details menu items for complex product workflows. This example demonstrates creating modals with multiple screens and interactive components, enabling forms, multi-step processes, or detailed information displays with full product and cart data access.',
  },
  category: 'Targets',
  subCategory: 'Product details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
