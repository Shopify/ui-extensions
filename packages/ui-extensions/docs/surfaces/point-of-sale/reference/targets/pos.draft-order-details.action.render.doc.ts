import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosDraftOrderDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from draft order details menu items. Use this target for complex draft order workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to draft order data through the Draft Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a draft order details action modal',
      'targets',
      'pos-draft-order-details-action',
    ),
    description:
      'Build a full-screen modal launched from draft order details menu items for complex draft order workflows. This example demonstrates creating modals with multiple screens and interactive components, enabling forms, multi-step processes, or detailed information displays with full draft order data access.',
  },
  category: 'Targets',
  subCategory: 'Draft order details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
