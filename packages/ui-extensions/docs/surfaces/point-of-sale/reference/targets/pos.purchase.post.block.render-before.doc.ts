import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostBlockRenderBefore,
  description: 'Renders a custom block before the post-purchase screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Banner',
      'targets',
      'pos-purchase-post-block-render-before',
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
    {
      name: ExtensionTargetType.PosPurchasePostBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-purchase-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
