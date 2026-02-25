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
      title: 'Properties',
      description:
        'The `CustomerApi` object provides access to customer data. Access these properties through `api.customer` to interact with the current customer context.',
      type: 'CustomerApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access customer information and build personalized experiences based on customer context.',
    examples: [
      {
        codeblock: generateCodeBlockForCustomerApi(
          'Get the current customer ID',
          'id',
        ),
        description:
          "Retrieve the unique identifier of the customer currently associated with the extension's context. This example shows how to access the customer ID from customer details screens, enabling you to fetch additional customer data, track customer-specific actions, or link to external systems.",
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
      sectionContent: `\n- **Implement customer-specific features:** Use the customer context to enable personalized functionality like customer-specific pricing, loyalty program integration, or customized product recommendations.\n- **Validate customer access:** Verify that the customer ID is valid before performing customer-specific operations or external API calls.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- The API provides only the customer identifier—use Shopify APIs or external systems to fetch additional customer details like name, email, or purchase history.\n- Customer data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.\n`,
    },
  ],
};

export default data;
