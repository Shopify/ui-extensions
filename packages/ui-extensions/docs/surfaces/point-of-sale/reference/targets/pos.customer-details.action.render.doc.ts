import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from customer details menu items. Use this target for complex customer workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to customer data through the Customer API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a customer details action modal',
      'targets',
      'customer-details-action',
    ),
    description:
      'Build a full-screen modal launched from customer details menu items for complex customer workflows. This example demonstrates creating modals with multiple screens and interactive components, enabling forms, multi-step processes, or detailed information displays with full customer data access.',
  },
  category: 'Targets',
  subCategory: 'Customer details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
