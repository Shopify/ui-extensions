import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionRender,
  description: `A full-screen extension target that renders when a \`pos.return.post.action.menu-item.render\` target calls for it
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/developer-previews#pos-ui-extensions-developer-preview). More information to come.`,
  defaultExample: {
    codeblock: generateCodeBlock(
      'Action',
      'targets',
      'pos-return-post-action-render',
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
      name: ExtensionTargetType.PosReturnPostBlockRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-return/pos-return-post-block-render',
    },
  ],
  type: 'Target',
};

export default data;
