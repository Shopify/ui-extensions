import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForLocaleApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'locale-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Locale API',
  description:
    "The Locale API provides access to the merchant's current locale information in IETF format, allowing you to internationalize your extension content and respond to locale changes in real time. The API enables both immediate locale access and dynamic updates when merchants change their language settings.",
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Handle locale changes reactively:** Use \`subscribe\` to auto-update content when merchants change language settings.
- **Implement proper formatting:** Use the IETF locale format for date, number, currency, and text direction formatting.
- **Cache localized content:** Cache translations for performance, but invalidate caches when locale changes.
- **Provide fallback handling:** Implement fallback behavior for unsupported locales, defaulting to a supported language like English.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- The Locale API provides read-only access to locale information and can't be used to change the merchant's locale settings, which must be configured through POS system settings.
- Locale changes are detected through the subscription mechanism, but the API doesn't provide historical locale information or change timestamps.
- The locale format follows IETF standards, but the specific locales available depend on POS system configuration and may vary between different Shopify POS installations.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to access locale information and respond to language changes.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForLocaleApi(
          'Monitor and respond to locale changes',
          'subscribe',
        ),
        description:
          "Subscribe to locale changes to monitor the merchant's language settings in real time. This example shows how to use `shopify.locale.subscribe()` and `shopify.locale.ianaCode` to detect when the merchant changes their language preference, enabling dynamic content localization and internationalized user experiences.",
      },
    ],
  },
};

export default data;
