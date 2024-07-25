import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostBlockRender,
  description:
    'Renders a custom section within the native post purchase screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-purchase-post-block-render',
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
    {
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
