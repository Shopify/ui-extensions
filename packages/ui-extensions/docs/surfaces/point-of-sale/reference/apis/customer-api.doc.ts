import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCustomerApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'customer-api', fileName);

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
        'The `CustomerApi` object provides access to customer data. Access this property through `api.customer` to interact with the current customer context.',
      type: 'CustomerApiContent',
    },
  ],
  examples: {
    description: 'Examples of using the Customer API.',
    examples: [
      {
        codeblock: generateCodeBlockForCustomerApi(
          'Retrieve the ID of the customer.',
          'id',
        ),
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
