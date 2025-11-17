import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForOrderApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'order-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Order API',
  description:
    'The Order API provides read-only access to order data. Use this API to get order information and build contextual experiences based on the selected order context. The API offers order details for implementing order-specific functionality and workflows.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'OrderApi',
      description:
        'The `OrderApi` object provides access to order data. Access this property through `shopify.order` to interact with the current order context.',
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
    ],
  },
};

export default data;
