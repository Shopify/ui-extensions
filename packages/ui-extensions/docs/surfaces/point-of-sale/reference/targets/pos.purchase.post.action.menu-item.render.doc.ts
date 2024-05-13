import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.purchase.post.action.menu-item.render',
  description:
    'A static extension target that renders as a menu item on the post-purchase screen',
  defaultExample: {
    codeblock: generateCodeBlock('Menu item', 'targets', 'menu-item'),
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.purchase.post.action.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
