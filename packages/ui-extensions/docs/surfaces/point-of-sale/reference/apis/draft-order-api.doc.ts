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
      title: 'DraftOrderApi',
      description:
        'The `DraftOrderApi` object provides access to draft order data. Access this property through `api.draftOrder` to interact with the current draft order context.',
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
  category: 'APIs',
  related: [],
};

export default data;
