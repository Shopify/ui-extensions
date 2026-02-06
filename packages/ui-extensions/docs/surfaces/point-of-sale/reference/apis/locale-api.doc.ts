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
      title: 'Methods',
      description:
        'The `LocaleApi` object provides access to current locale information and change notifications. Access these methods through `shopify.locale` to retrieve and monitor locale data.',
      type: 'LocaleApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle locale changes reactively:** Use the `subscribe` method to automatically update your extension content when merchants change their language settings.\n' +
        "- **Implement proper formatting:** Use the IETF locale format to implement proper date formatting, number formatting, currency display, and text direction based on the merchant's language and region preferences.\n" +
        '- **Cache localized content:** Consider caching translated content and locale-specific formatting to improve performance, but ensure you invalidate caches when locale changes occur through subscription updates.\n' +
        '- **Provide fallback locale handling:** Implement fallback behavior for unsupported locales or when localization resources are unavailable, defaulting to a supported language like English.',
    },
  ],
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
          "Subscribe to locale changes to monitor the merchant's language settings in real time. This example shows how to use `shopify.locale.subscribe()` and `shopify.locale.ianaCode` to detect when the merchant changes their language preference. This enables dynamic content localization and internationalized user experiences.",
      },
    ],
  },
};

export default data;
