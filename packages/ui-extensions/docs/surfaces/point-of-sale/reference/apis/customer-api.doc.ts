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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use customer ID for lookups:** Fetch additional customer information from external systems or Shopify APIs using the customer ID.
- **Enable personalized features:** Use customer context for customer-specific pricing, loyalty programs, or product recommendations.
- **Validate customer access:** Verify the customer ID is valid before performing operations or API calls.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Customer data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.
`,
    },
  ],
  examples: {
    description:
      'Learn how to access customer information in customer detail contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCustomerApi(
          'Retrieve the customer ID',
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
<<<<<<< HEAD
=======
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use customer ID for lookups:** Fetch additional customer information from external systems or Shopify APIs using the customer ID.
- **Enable personalized features:** Use customer context for customer-specific pricing, loyalty programs, or product recommendations.
- **Validate customer access:** Verify the customer ID is valid before performing operations or API calls.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Customer data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.
`,
    },
  ],
>>>>>>> 2025-10
};

export default data;
