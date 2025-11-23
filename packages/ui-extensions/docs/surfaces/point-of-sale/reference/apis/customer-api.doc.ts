import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForCustomerApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'customer-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer API',
  description:
    'The Customer API provides read-only access to customer data. Use this API to get customer information and build personalized experiences based on the selected customer context. The API offers the customer identifier for linking to customer data and enabling customer-specific features.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CustomerApi',
      description:
        'The `CustomerApi` object provides access to customer data. Access this property through `shopify.customer` to interact with the current customer context.',
      type: 'CustomerApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access customer information in customer detail contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCustomerApi(
          'Display the customer ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current customer in a customer detail context. This example shows how to use `shopify.customer.id` to retrieve the customer ID, which can be used for fetching additional customer data, implementing loyalty features, or building personalized customer experiences.',
      },
    ],
  },
  category: 'APIs',
  related: [
    {
      name: ExtensionTargetType.PosCustomerDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCustomerDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-customer-details-action-render',
    },
  ],
};

export default data;
