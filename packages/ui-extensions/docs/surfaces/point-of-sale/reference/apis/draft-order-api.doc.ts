import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Draft Order API',
  description:
    'The Draft Order API provides an extension with data about the current draft order.',
  isVisualComponent: false,
  type: 'APIs',
  requires:
    ExtensionTargetType.PosDraftOrderDetailsActionMenuItemRender ||
    ExtensionTargetType.PosDraftOrderDetailsActionRender,
  definitions: [
    {
      title: 'DraftOrderApi',
      description: '',
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
