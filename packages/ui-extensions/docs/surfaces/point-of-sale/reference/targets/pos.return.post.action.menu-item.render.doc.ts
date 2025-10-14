import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
  description: `A static extension target that renders as a menu item on the post-return screen
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/feature-previews#pos-ui-extensions-preview). More information to come.`,
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
