import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForOrderApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'order-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description: `
The Order API provides an extension with data about the current order.

#### Supporting targets
- ${TargetLink.PosPurchasePostActionMenuItemRender}
- ${TargetLink.PosPurchasePostActionRender}
- ${TargetLink.PosPurchasePostBlockRender}
- ${TargetLink.PosOrderDetailsActionMenuItemRender}
- ${TargetLink.PosOrderDetailsActionRender}
- ${TargetLink.PosOrderDetailsBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'OrderApi',
      description: '',
      type: 'OrderApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Order API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForOrderApi(
          'Retrieve the ID of the order.',
          'id',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForOrderApi(
          "Retrieve an order's name, ID, and associated customer ID",
          'order-details',
        ),
      },
    ],
  },
};

export default data;
