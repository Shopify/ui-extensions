import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionRender,
  description:
    'Renders a full-screen modal interface launched from post-return menu items. Use this target for complex post-return workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a post-return action modal',
      'targets',
      'pos-return-post-action-render',
    ),
    description:
      'Build a full-screen modal launched from post-return menu items for complex return workflows. This example demonstrates creating modals with multiple screens and interactive components, enabling forms, multi-step processes, or detailed information displays with full order data access.',
  },
  category: 'Targets',
  subCategory: 'Post-return',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosReturnPostBlockRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
