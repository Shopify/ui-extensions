import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionRender,
  description:
    'Renders a full-screen modal interface launched from post-return menu items. Use this target for complex post-return workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a post-return action modal',
      'targets',
      'pos-return-post-action-render',
    ),
    description:
      'Build a full-screen modal workflow launched from a post-return action menu item. This example demonstrates creating complex post-return experiences with multi-step processes, forms, and order data access for operations like restocking workflows or return analytics.',
  },
  category: 'Targets',
  subCategory: 'Post-return',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
