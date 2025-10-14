import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostBlockRender,
  description: `Renders a custom section within the native post return screen
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/feature-previews#pos-ui-extensions-preview). More information to come.`,
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-return-post-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Post-return',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosReturnPostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
