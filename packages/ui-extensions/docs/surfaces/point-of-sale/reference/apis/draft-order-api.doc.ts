import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Draft Order API',
  description:
    'The Draft Order API provides read-only access to draft order data. Use this API to get draft order information and build contextual experiences based on the selected draft order context. The API offers draft order details for implementing order-specific functionality and workflows.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `DraftOrderApi` object provides access to draft order data. Access these properties through `api.draftOrder` to interact with the current draft order context.',
      type: 'DraftOrderApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access draft order information and build contextual experiences for draft order workflows.',
    examples: [
      {
        codeblock: generateCodeBlock(
          'Get the current draft order ID',
          'draft-order-api',
          'id',
        ),
        description:
          "Retrieve the unique identifier of the draft order currently associated with the extension's context. This example shows how to access the draft order ID from draft order detail screens, enabling you to fetch additional order data, implement custom workflows, or integrate with external systems.",
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
      sectionContent: `\n- **Implement draft order-specific features:** Use the draft order context to enable specialized functionality like draft order conversion, customer assignment, or order modification workflows.\n- **Validate draft order access:** Verify that the draft order ID is valid before performing draft order-specific operations or external API calls.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- The API provides only basic draft order information—use Shopify APIs or external systems to fetch additional draft order details like line items, totals, or timestamps.\n- Draft order data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.\n`,
    },
  ],
};

export default data;
