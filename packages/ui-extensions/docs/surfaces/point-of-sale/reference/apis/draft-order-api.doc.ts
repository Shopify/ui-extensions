import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForDraftOrderApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'draft-order-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Draft Order API',
  description: `
The Draft Order API provides an extension with data about the current draft order.


#### Supporting targets
- ${TargetLink.PosDraftOrderDetailsActionMenuItemRender}
- ${TargetLink.PosDraftOrderDetailsActionRender}
- ${TargetLink.PosDraftOrderDetailsBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'DraftOrderApi',
      description: '',
      type: 'DraftOrderApiContent',
    },
  ],
  examples: {
    description: 'Examples of using the Draft Order API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForDraftOrderApi(
          'Retrieve the ID of the draft order.',
          'id',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForDraftOrderApi(
          "Retrieve a draft order's name, ID, and associated customer ID",
          'draft-order-details',
        ),
      },
    ],
  },
  category: 'APIs',
  related: [],
};

export default data;
