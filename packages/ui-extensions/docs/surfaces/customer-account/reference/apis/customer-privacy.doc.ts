import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Privacy API',
  description:
    "The Customer Privacy API provides access to the buyer's tracking consent preferences and lets your extension apply consent changes. Use this API to build consent banners, check current consent decisions for analytics, marketing, and data sale, and save updated preferences.",
  isVisualComponent: false,
  requires:
    'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). The `region` property requires level 1 access. The `applyTrackingConsentChange` property requires the [`customer_privacy` capability](/docs/api/customer-account-ui-extensions/latest#configuration).',
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `StandardApi` object provides the customer privacy data and consent management methods. Access the following properties on the `StandardApi` object to read privacy consent settings and apply consent changes.',
      type: 'Docs_Standard_CustomerPrivacyApi',
    },
  ],
  defaultExample: {
    description:
      'Check whether to show a cookie consent banner and allow the buyer to accept or decline tracking. This example reads `shopify.customerPrivacy.shouldShowBanner` and renders accept/decline buttons that call `shopify.applyTrackingConsentChange`.',
    codeblock: {
      title: 'Display a consent banner',
      tabs: [
        {
          code: '../examples/apis/customer-privacy-banner.example.jsx',
          language: 'jsx',
          title: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          "Display the buyer's current consent preferences for each tracking category. This example reads `shopify.customerPrivacy` and renders the status of analytics, marketing, preferences, and sale of data consent.",
        codeblock: {
          title: 'Read the current consent state',
          tabs: [
            {
              code: '../examples/apis/customer-privacy-consent-state.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Save updated tracking consent preferences after the buyer interacts with your consent UI. This example calls `shopify.applyTrackingConsentChange` with the buyer's selections and displays a success or error message based on the result.",
        codeblock: {
          title: 'Apply consent changes',
          tabs: [
            {
              code: '../examples/apis/customer-privacy-apply-consent.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Use `shouldShowBanner` for initial state**: Check the `shouldShowBanner` property to determine whether to display a consent banner when the page loads, rather than always showing one.\n- **Respect regional requirements**: Use `saleOfDataRegion` and `region` to determine if additional opt-out controls are required for the buyer's location.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Applying tracking consent changes requires the [`customer_privacy` capability](/docs/api/customer-account-ui-extensions/latest#configuration) to be enabled in your extension's configuration.\n- The `region` property requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). Without this access, the visitor's location is unavailable.",
    },
  ],
  related: [],
};

export default data;
