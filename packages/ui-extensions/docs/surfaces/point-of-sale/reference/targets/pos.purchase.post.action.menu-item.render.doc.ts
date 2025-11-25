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
      'Show a post-purchase action menu item',
      'targets',
      'pos-purchase-post-action-menu-item-render',
    ),
    description:
      'Create an action menu item in the post-purchase flow. This example demonstrates rendering a button in the post-purchase action menu for operations like sending receipts, collecting customer feedback, or launching follow-up workflows after completing a sale.',
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
