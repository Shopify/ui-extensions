import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForOrderApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'order-api', fileName);

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
    description: 'Examples of using the Order API',
    examples: [
      {
        codeblock: generateCodeBlockForOrderApi(
          'Basic usage of the Order API with useOrder hook',
          'basic-usage',
        ),
      },
      {
        codeblock: generateCodeBlockForOrderApi(
          'Display order details in a custom block',
          'display-in-block',
        ),
      },
      {
        codeblock: generateCodeBlockForOrderApi(
          'Use Order API with navigation',
          'with-navigation',
        ),
      },
      {
        codeblock: generateCodeBlockForOrderApi(
          'Simple useOrder hook example',
          'use-order-hook',
        ),
      },
    ],
  },
};

export default data;
