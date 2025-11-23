import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosExchangePostBlockRender,
  description:
    'Renders a custom information section within the post-exchange screen. Use this target for displaying supplementary exchange data like completion status, payment adjustments, or follow-up workflows alongside standard exchange details.' +
    '\n\nExtensions at this target appear as persistent blocks within the post-exchange interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex post-exchange operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a post-exchange information block',
      'targets',
      'pos-exchange-post-block-render',
    ),
    description:
      'Add a custom information section to the post-exchange screen for displaying exchange details or status. This example shows how to create a block that provides supplementary information after completing an exchange, with interactive elements that can launch modal workflows.',
  },
  category: 'Targets',
  subCategory: 'Post-exchange',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosExchangePostActionMenuItemRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '../action/pos-exchange-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosExchangePostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '../action/pos-exchange-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
