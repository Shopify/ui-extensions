import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosPurchasePostBlockRender,
  description:
    'Renders a custom information section within the post-purchase screen. Use this target for displaying supplementary purchase data like completion status, customer feedback prompts, or next-step workflows alongside standard purchase details.' +
    '\n\nExtensions at this target appear as persistent blocks within the post-purchase interface and support interactive elements that can launch modal workflows using `api.action.presentModal()` for more complex post-purchase operations.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Add a post-purchase block',
      'targets',
      'pos-purchase-post-block-render',
    ),
    description:
      'Display custom information within the post-purchase screen as a persistent block. This example shows how to create blocks that show supplementary purchase data like completion status, customer feedback prompts, or next-step workflows with interactive elements.',
  },
  category: 'Targets',
  subCategory: 'Post-purchase',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
