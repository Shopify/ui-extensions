import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForOrderApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'order-api', fileName);

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
        'The `OrderApi` object provides access to order data. Access this property through `api.order` to interact with the current order context.',
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
          'Basic usage of the Order API in an action',
          'basic-usage',
        ),
      },
      {
        codeblock: generateCodeBlockForOrderApi(
          'Display order details in a block',
          'display-in-block',
        ),
      },
    ],
  },
};

export default data;
