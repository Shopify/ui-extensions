import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the post-exchange action menu. Use this target for post-exchange operations like generating exchange receipts, processing restocking workflows, or collecting exchange feedback.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform exchange-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete post-exchange workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a post-exchange action menu item',
      'targets',
      'pos-exchange-post-action-menu-item-render',
    ),
    description:
      'Add an interactive menu item to the post-exchange action menu for operations after completing an exchange. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like generating receipts, processing restocking, or collecting feedback.',
  },
  category: 'Targets',
  subCategory: 'Post-exchange',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosExchangePostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-exchange/pos-exchange-post-action-render',
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
