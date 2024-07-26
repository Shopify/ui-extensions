import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

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
        codeblock: generateCodeBlock(
          'Retrieve the ID of the draft order.',
          'draft-order-api',
          'id',
        ),
      },
    ],
  },
  category: 'APIs',
  related: [],
};

export default data;
