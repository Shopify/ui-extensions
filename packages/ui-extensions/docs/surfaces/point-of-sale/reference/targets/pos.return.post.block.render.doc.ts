import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostBlockRender,
  description:
    'Renders a custom information section within the post-return screen. Use this target for displaying supplementary return data like completion status, refund confirmations, or follow-up workflows alongside standard return details.' +
    '\n\nExtensions at this target appear as persistent blocks within the post-return interface and support interactive elements that can launch modal workflows using `api.action.presentModal()` for more complex post-return operations.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Add a post-return block',
      'targets',
      'pos-return-post-block-render',
    ),
    description:
      'Display custom information within the post-return screen as a persistent block. This example shows how to create blocks that show supplementary return data like completion status, refund confirmations, or follow-up workflows with interactive elements.',
  },
  category: 'Targets',
  subCategory: 'Post-return',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
