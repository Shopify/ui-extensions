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
      'Show an order action modal',
      'targets',
      'pos-order-details-action-render',
    ),
    description:
      'Create a full-screen modal for order workflows launched from order details menu items. This example shows how to build complex order operations with forms, multi-step processes, and access to order data through the Order API.',
  },
  category: 'Targets',
  subCategory: 'Order details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
