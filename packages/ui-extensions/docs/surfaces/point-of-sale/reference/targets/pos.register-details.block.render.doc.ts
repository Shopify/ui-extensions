import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosRegisterDetailsBlockRender,
  description:
    'Renders a custom information section within the register details screen. Use this target for displaying supplementary register data like cash drawer status, transaction summaries, or shift analytics alongside standard register details.' +
    '\n\nExtensions at this target appear as persistent blocks within the register details interface and support interactive elements that can launch modal workflows using `shopify.action.presentModal()` for more complex register operations.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a register details information block',
      'targets',
      'pos-register-details-block-render',
    ),
    description:
      'Add a custom information section to the register details screen for displaying supplementary register data. This example shows how to create a block that provides additional register information, cash status, or shift details alongside standard register details.',
  },
  category: 'Targets',
  subCategory: 'Register details',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};
export default data;
