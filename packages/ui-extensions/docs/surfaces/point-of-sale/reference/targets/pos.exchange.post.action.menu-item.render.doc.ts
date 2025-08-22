import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostActionMenuItemRender,
  description: `A static extension target that renders as a menu item on the post-exchange screen
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,

  category: 'Targets',
  subCategory: 'Action',
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
