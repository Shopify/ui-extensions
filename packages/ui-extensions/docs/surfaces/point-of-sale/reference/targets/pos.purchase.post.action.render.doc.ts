import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostActionRender,
  description:
    'A full-screen extension target that renders when a `pos.purchase.post.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Action',
      'targets',
      'pos-purchase-post-action-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-action-menu-item-render',
    },
  ],
  type: 'Target',
};

export default data;
