import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForActionApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'action-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Action API',
  description: `
The Action API allows an action extension to modally present its corresponding modal target.

#### Supporting targets
- ${TargetLink.PosHomeTileRender}
- ${TargetLink.PosPurchasePostActionMenuItemRender}
- ${TargetLink.PosPurchasePostBlockRender}
- ${TargetLink.PosOrderDetailsActionMenuItemRender}
- ${TargetLink.PosOrderDetailsBlockRender}
- ${TargetLink.PosProductDetailsActionMenuItemRender}
- ${TargetLink.PosProductDetailsBlockRender}
- ${TargetLink.PosCustomerDetailsActionMenuItemRender}
- ${TargetLink.PosCustomerDetailsBlockRender}
- ${TargetLink.PosDraftOrderDetailsActionMenuItemRender}
- ${TargetLink.PosDraftOrderDetailsBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ActionApi',
      description: '',
      type: 'ActionApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Action API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Present a modal from post purchase.',
          'present-modal',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Present a modal from smart grid.',
          'present-modal-tile',
        ),
      },
    ],
  },
};

export default data;
