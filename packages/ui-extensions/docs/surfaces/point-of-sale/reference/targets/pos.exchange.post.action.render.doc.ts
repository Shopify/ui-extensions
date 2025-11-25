import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostActionRender,
  description:
    'Renders a full-screen modal interface launched from post-exchange menu items. Use this target for complex post-exchange workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a post-exchange action modal',
      'targets',
      'pos-exchange-post-action-render',
    ),
    description:
      'Build a full-screen modal workflow launched from a post-exchange action menu item. This example demonstrates creating complex post-exchange experiences with multi-step processes, forms, and order data access for operations like inventory management or exchange analytics.',
  },
  category: 'Targets',
  subCategory: 'Post-exchange',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
