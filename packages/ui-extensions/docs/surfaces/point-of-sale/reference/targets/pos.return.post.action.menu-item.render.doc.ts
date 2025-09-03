import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
  description: `A static extension target that renders as a menu item on the post-return screen
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Return Post Action Menu Item',
      'targets',
      'pos-return-post-action-menu-item-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Action',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosReturnPostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: 'pos-return-post-action-render',
    },
    {
      name: ExtensionTargetType.PosReturnPostBlockRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '../block/pos-return-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
