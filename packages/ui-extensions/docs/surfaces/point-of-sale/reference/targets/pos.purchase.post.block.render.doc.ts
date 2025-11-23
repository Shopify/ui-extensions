import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostBlockRender,
  description:
    'Renders a custom information section within the post-purchase screen. Use this target for displaying supplementary purchase data like completion status, customer feedback prompts, or next-step workflows alongside standard purchase details.' +
    '\n\nExtensions at this target appear as persistent blocks within the post-purchase interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex post-purchase operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a post-purchase information block',
      'targets',
      'pos-purchase-post-block-render',
    ),
    description:
      'Add a custom information section to the post-purchase screen for displaying order details or status. This example shows how to create a block that provides supplementary information after completing a sale, with interactive elements that can launch modal workflows.',
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosPurchasePostActionMenuItemRender,
      url: '../action/pos-purchase-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosPurchasePostActionRender,
      url: '../action/pos-purchase-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
