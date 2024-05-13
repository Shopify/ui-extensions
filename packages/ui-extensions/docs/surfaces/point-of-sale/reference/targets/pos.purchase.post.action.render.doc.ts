import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.purchase.post.action.render',
  description:
    'A full-screen extension target that renders when a `pos.purchase.post.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock('Action', 'targets', 'action'),
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.purchase.post.action.menu-item.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-action-menu-item-render',
    },
  ],
  type: 'Target',
};

export default data;
