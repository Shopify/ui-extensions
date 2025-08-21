import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionRender,
  description: `A full-screen extension target that renders when a \`pos.return.post.action.menu-item.render\` target calls for it

  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,

  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-action-menu-item-render',
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
