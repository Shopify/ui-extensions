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
    description: 'Examples of using the Draft Order API.',
    examples: [
      {
        codeblock: generateCodeBlock(
          'Retrieve the ID of the draft order.',
          'draft-order-api',
          'id',
        ),
      },
    ],
  },
  category: 'APIs',
  related: [],
};

export default data;
