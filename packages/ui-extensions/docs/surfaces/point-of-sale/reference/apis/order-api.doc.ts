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
      title: 'Properties',
      description:
        'The `OrderApi` object provides access to order data. Access these properties through `api.order` to interact with the current order context.',
      type: 'OrderApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  examples: {
    description:
      'Learn how to access order information and build contextual experiences based on completed orders.',
    examples: [
      {
        codeblock: generateCodeBlockForOrderApi(
          'Access order data in an action menu',
          'basic-usage',
        ),
        description:
          'Retrieve order information from action menu items on order detail screens. This example shows how to access the Order API to get the current order data, enabling you to build custom workflows, generate reports, or trigger integrations based on order details.',
      },
      {
        codeblock: generateCodeBlockForOrderApi(
          'Show order details in a block',
          'display-in-block',
        ),
        description:
          'Show order details within a custom block on order detail screens. This example demonstrates how to use the Order API to fetch and display order information in a persistent block, providing merchants with quick access to relevant order data or additional context.',
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Implement order-specific features:** Use the order context to enable specialized functionality like order fulfillment, customer communication, or order modification workflows.\n- **Validate order access:** Verify that the order ID is valid before performing order-specific operations or external API calls.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- The API provides only basic order information—use Shopify APIs or external systems to fetch additional order details like line items, totals, or fulfillment status.\n- Order data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.\n`,
    },
  ],
};

export default data;
