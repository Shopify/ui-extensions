import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForLocaleApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'locale-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Locale API',
  description:
    "The Locale API allows the extension to retrieve the merchant's locale.",
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
        codeblock: generateCodeBlockForLocaleApi(
          'Subscribe to locale changes.',
          'subscribable',
        ),
      },
    ],
  },
};

export default data;
