import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForDraftOrderApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'draft-order-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Draft Order API',
  description:
    'The Draft Order API provides read-only access to draft order data. Use this API to get draft order information and build contextual experiences based on the selected draft order context. The API offers draft order details for implementing order-specific functionality and workflows.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'DraftOrderApi',
      description:
        'The `DraftOrderApi` object provides access to draft order data. Access this property through `api.draftOrder` to interact with the current draft order context.',
      type: 'DraftOrderApiContent',
    },
  ],
  examples: {
    description:
      'Learn how to access draft order information in draft order detail contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForDraftOrderApi(
          'Display the draft order ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current draft order in a draft order detail context. This example shows how to use `shopify.draftOrder.id` to retrieve the draft order ID. This can be used for fetching additional order data, implementing custom workflows, or building draft order-specific features.',
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
        '- **Use draft order ID for data lookups:** Use the draft order ID to fetch additional draft order information from external systems, order management platforms, or Shopify APIs when building comprehensive draft order experiences.\n' +
        '- **Implement draft order-specific features:** Use the draft order context to enable specialized functionality like draft order conversion, customer assignment, or order modification workflows.\n' +
        '- **Validate draft order access:** Verify that the draft order ID is valid before performing draft order-specific operations or external API calls.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The API provides only basic draft order information—use Shopify APIs or external systems to fetch additional draft order details like line items, totals, or timestamps.\n' +
        '- Draft order data reflects the current POS session and may not include real-time updates from other channels until the session is refreshed.',
    },
  ],
};

export default data;
