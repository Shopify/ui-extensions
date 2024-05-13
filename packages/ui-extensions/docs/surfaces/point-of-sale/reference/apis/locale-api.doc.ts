import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Locale API',
  description:
    'The Locale API allows the extension to retreive the merchants locale.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'LocaleApi',
      description: '',
      type: 'LocaleApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Locale API',
    examples: [
      {
        codeblock: generateCodeBlock(
          'Subscribe to locale changes.',
          'locale-api',
          'subscribable',
        ),
      },
    ],
  },
};

export default data;
