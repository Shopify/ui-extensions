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
<<<<<<< HEAD
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use order ID for lookups:** Fetch additional order information from external systems or Shopify APIs using the order ID.
- **Enable order-specific features:** Use order context for order fulfillment, customer communication, or modification workflows.
- **Validate order access:** Verify the order ID is valid before performing operations or API calls.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Order data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.
`,
    },
  ],
=======
>>>>>>> 2025-10
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Use order ID for data lookups:** Use the order ID to fetch additional order information from external systems, order management platforms, or Shopify APIs when building comprehensive order experiences.\n' +
        '- **Implement order-specific features:** Use the order context to enable specialized functionality like order fulfillment, customer communication, or order modification workflows.\n' +
        '- **Validate order access:** Verify that the order ID is valid before performing order-specific operations or external API calls.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Order data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.
`,
    },
  ],
  examples: {
    description:
      'Learn how to access order information in order detail contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForOrderApi(
          'Retrieve an order ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current order in an order detail action context. This example shows how to use `shopify.order.id` to retrieve the order ID. This can be used for fetching additional order data, tracking, or implementing order-specific functionality and post-purchase workflows.',
<<<<<<< HEAD
=======
      },
      {
        codeblock: generateJsxCodeBlockForOrderApi(
          "Retrieve an order's name, ID, and associated customer ID",
          'order-details',
        ),
        description:
          'Access multiple order properties including the order name and customer ID. This example demonstrates accessing `shopify.order.id`, `shopify.order.name`, and `shopify.order.customerId` to display comprehensive order information. Use this pattern for order management workflows and customer service features.',
>>>>>>> 2025-10
      },
    ],
  },
};

export default data;
