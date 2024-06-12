import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
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
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
