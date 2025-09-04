import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForLocaleApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'locale-api', fileName);

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
        codeblock: generateJsxCodeBlockForLocaleApi(
          'Subscribe to locale changes.',
          'subscribe',
        ),
      },
    ],
  },
};

export default data;
