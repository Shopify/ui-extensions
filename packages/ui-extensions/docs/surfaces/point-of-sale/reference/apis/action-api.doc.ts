import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action API',
  description:
    'The Action API allows an action extension to modally present its corresponding modal target.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Action',
      description: '',
      type: 'ActionApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Action API.',
    examples: [
      {
        codeblock: generateCodeBlock(
          'Present a modal from post purchase.',
          'action-api',
          'present-modal',
        ),
      },
      {
        codeblock: generateCodeBlock(
          'Present a modal from smart grid.',
          'action-api',
          'present-modal-tile',
        ),
      },
    ],
  },
};

export default data;
