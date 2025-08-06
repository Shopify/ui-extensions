import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostBannerRender,
  description: 'Renders a banner at the top of the post purchase screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Banner',
      'targets',
      'pos-purchase-post-banner-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [
    {
      name: 'Banner',
      subtitle: 'Component',
      type: 'apps',
      url: '/docs/api/pos-ui-extensions/components/banner',
    },
    {
      name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/post-purchase/pos-purchase-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: '/docs/api/pos-ui-extensions/targets/post-purchase/pos-purchase-post-action-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/post-purchase/pos-purchase-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
