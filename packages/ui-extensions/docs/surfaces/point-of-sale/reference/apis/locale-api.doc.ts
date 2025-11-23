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
    description:
      'Learn how to access locale information and respond to language changes for internationalization.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForLocaleApi(
          'Monitor locale changes',
          'subscribe',
        ),
        description:
          "Subscribe to locale changes to build internationalized extensions that automatically adapt to the merchant's language settings. This example shows how to use `shopify.locale.subscribe()` to receive real-time notifications when the merchant changes their language, allowing you to update your UI text, date formats, and number formats accordingly.",
      },
    ],
  },
};

export default data;
