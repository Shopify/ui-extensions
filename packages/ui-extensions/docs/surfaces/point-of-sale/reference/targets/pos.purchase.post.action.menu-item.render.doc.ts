import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the post-purchase action menu. Use this target for post-purchase operations like sending receipts, collecting customer feedback, or launching follow-up workflows after completing a sale.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform purchase-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete post-purchase workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a post-purchase action menu item',
      'targets',
      'pos-purchase-post-action-menu-item-render',
    ),
    description:
      'Add an interactive menu item to the post-purchase action menu for operations after completing a sale. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like sending receipts, collecting feedback, or follow-up processes.',
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-action-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
