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
          'Access the unique identifier of the current customer in a customer detail context. This example shows how to use `shopify.customer.id` to retrieve the customer ID. This can be used for fetching additional customer data, implementing loyalty features, or building personalized customer experiences.',
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Use customer ID for data lookups:** Use the customer ID to fetch additional customer information from external systems, CRM platforms, or Shopify APIs when building comprehensive customer experiences.\n' +
        '- **Implement customer-specific features:** Use the customer context to enable personalized functionality like customer-specific pricing, loyalty program integration, or customized product recommendations.\n' +
        '- **Validate customer access:** Verify that the customer ID is valid before performing customer-specific operations or external API calls.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The API provides only the customer identifier—use Shopify APIs or external systems to fetch additional customer details like name, email, or purchase history.\n' +
        '- Customer data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.',
    },
  ],
};

export default data;
