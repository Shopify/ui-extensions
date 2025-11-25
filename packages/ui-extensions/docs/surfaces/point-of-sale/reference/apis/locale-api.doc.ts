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
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The Locale API provides read-only access to locale information and can't be used to change the merchant's locale settings, which must be configured through POS system settings.\n" +
        "- Locale changes are detected through the subscription mechanism, but the API doesn't provide historical locale information or change timestamps.\n" +
        '- The locale format follows IETF standards, but the specific locales available depend on POS system configuration and may vary between different Shopify POS installations.',
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
          "Subscribe to locale changes to build internationalized extensions that automatically adapt to the merchant's language settings. This example shows how to use `shopify.locale.subscribe()` to receive real-time notifications when the merchant changes their language, allowing you to update your UI text, date formats, and number formats accordingly.",
      },
    ],
  },
};

export default data;
