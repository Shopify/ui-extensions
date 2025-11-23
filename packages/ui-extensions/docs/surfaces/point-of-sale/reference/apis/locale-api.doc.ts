import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForLocaleApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'locale-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Locale API',
  description:
    "The Locale API provides access to the merchant's current locale information in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag), allowing you to internationalize your extension content and respond to locale changes through subscription callbacks. The API provides both immediate locale access and change notifications for dynamic internationalization.",
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'LocaleApi',
      description:
        'The `LocaleApi` object provides access to current locale information and change notifications. Access these properties through `api.locale` to retrieve and monitor locale data.',
      type: 'LocaleApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description:
      "Learn how to access locale information and internationalize your extension based on the merchant's language settings.",
    examples: [
      {
        codeblock: generateCodeBlockForLocaleApi(
          'Track locale changes in real time',
          'subscribable',
        ),
        description:
          "Subscribe to locale changes to dynamically update your extension's content when the merchant switches languages. This example demonstrates monitoring locale updates and displaying the current locale in IETF format, allowing you to provide properly localized content and adapt to language preferences in real time.",
      },
    ],
  },
};

export default data;
