import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
  description: `A static extension target that renders as a menu item on the post-return screen
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,

  category: 'Targets',
  subCategory: 'Action',
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
