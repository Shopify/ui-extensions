import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the post-purchase action menu. Use this target for post-purchase operations like sending receipts, collecting customer feedback, or launching follow-up workflows after completing a sale.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform purchase-specific operations. Menu items typically invoke `shopify.action.presentModal()` to launch the companion modal for complete post-purchase workflows.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Menu item',
      'targets',
      'pos-purchase-post-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: 'pos-purchase-post-action-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostBlockRender,
      url: '../block/pos-purchase-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
