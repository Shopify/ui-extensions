import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostActionRender,
  description:
    'Renders a full-screen modal interface launched from post-exchange menu items. Use this target for complex post-exchange workflows that require forms, multi-step processes, or detailed information displays beyond what a simple button can provide.' +
    '\n\nExtensions at this target have access to order data through the Order API and support workflows with multiple screens, navigation, and interactive components.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Action',
      'targets',
      'pos-exchange-post-action-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Post-exchange',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosExchangePostActionMenuItemRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-exchange/pos-exchange-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosExchangePostBlockRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-exchange/pos-exchange-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
