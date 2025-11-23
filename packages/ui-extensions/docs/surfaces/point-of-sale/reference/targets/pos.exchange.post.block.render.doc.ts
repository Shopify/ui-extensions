import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostBlockRender,
  description:
    'Renders a custom information section within the post-exchange screen. Use this target for displaying supplementary exchange data like completion status, payment adjustments, or follow-up workflows alongside standard exchange details.' +
    '\n\nExtensions at this target appear as persistent blocks within the post-exchange interface and support interactive elements that can launch modal workflows using `api.action.presentModal()` for more complex post-exchange operations.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Add a post-exchange block',
      'targets',
      'pos-exchange-post-block-render',
    ),
    description:
      'Display custom information within the post-exchange screen as a persistent block. This example shows how to create blocks that show supplementary exchange data like completion status, payment adjustments, or follow-up workflows with interactive elements.',
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
