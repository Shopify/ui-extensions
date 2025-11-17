import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForLocaleApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'locale-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Locale API',
  description:
    "The Locale API provides access to the merchant's current locale information in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag), allowing you to internationalize your extension content and respond to locale changes in real time. The API enables both immediate locale access and dynamic updates when merchants change their language settings.",
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'LocaleApi',
      description:
        'The `LocaleApi` object provides access to current locale information and change notifications. Access these properties through `shopify.locale` to retrieve and monitor locale data.',
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
