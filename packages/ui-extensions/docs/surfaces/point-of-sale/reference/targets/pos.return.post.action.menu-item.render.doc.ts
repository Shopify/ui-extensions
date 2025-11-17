import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the post-return action menu. Use this target for post-return operations like generating return receipts, processing restocking workflows, or collecting return feedback.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform return-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete post-return workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Menu item',
      'targets',
      'pos-return-post-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Post-return',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosReturnPostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-action-render',
    },
    {
      name: ExtensionTargetType.PosReturnPostBlockRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
