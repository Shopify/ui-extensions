import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostBlockRender,
  description: `Renders a custom section within the native post exchange screen
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/feature-previews#pos-ui-extensions-preview). More information to come.`,
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-exchange-post-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Post-exchange',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosExchangePostActionMenuItemRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-exchange/pos-exchange-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosExchangePostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/post-exchange/pos-exchange-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
