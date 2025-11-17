import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the post-exchange action menu. Use this target for post-exchange operations like generating exchange receipts, processing restocking workflows, or collecting exchange feedback.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform exchange-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete post-exchange workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Menu item',
      'targets',
      'pos-exchange-post-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Post-exchange',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosExchangePostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-exchange/pos-exchange-post-action-render',
    },
    {
      name: ExtensionTargetType.PosExchangePostBlockRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-exchange/pos-exchange-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
