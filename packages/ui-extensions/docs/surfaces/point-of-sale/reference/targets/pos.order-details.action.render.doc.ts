import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosOrderDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from order details menu items. Use this target for complex order workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create an order details action modal',
      'targets',
      'pos-order-details-action-render',
    ),
    description:
      'Build a full-screen modal launched from order details menu items for complex order workflows. This example demonstrates creating modals with multiple screens and interactive components, enabling forms, multi-step processes, or detailed information displays with full order data access.',
  },
  category: 'Targets',
  subCategory: 'Order details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
