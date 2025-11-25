import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCustomerDetailsActionRender,
  description:
    'Renders a full-screen modal interface launched from customer details menu items. Use this target for complex customer workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to customer data through the Customer API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a customer details action modal',
      'targets',
      'customer-details-action',
    ),
    description:
      'Build a full-screen modal workflow launched from a customer details action menu item. This example demonstrates creating customer-specific experiences with multi-step processes, forms, and customer data access for operations like loyalty management or profile updates.',
  },
  category: 'Targets',
  subCategory: 'Customer details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
