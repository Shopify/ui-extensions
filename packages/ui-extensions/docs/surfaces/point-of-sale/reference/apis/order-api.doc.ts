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
    description:
      'Learn how to access order information in order detail contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForOrderApi(
          'Display the order ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current order in an order detail action context. This example shows how to use `shopify.order.id` to retrieve the order ID, which can be used for fetching additional order data, tracking, or implementing order-specific functionality and post-purchase workflows.',
      },
    ],
  },
};

export default data;
