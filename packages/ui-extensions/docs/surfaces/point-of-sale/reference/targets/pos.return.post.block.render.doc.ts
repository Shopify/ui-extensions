import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostBlockRender,
  description:
    'Renders a custom information section within the post-return screen. Use this target for displaying supplementary return data like completion status, refund confirmations, or follow-up workflows alongside standard return details.' +
    '\n\nExtensions at this target appear as persistent blocks within the post-return interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex post-return operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a post-return information block',
      'targets',
      'pos-return-post-block-render',
    ),
    description:
      'Add a custom information section to the post-return screen for displaying return details or status. This example shows how to create a block that provides supplementary information after completing a return, with interactive elements that can launch modal workflows.',
  },
  category: 'Targets',
  subCategory: 'Post-return',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
