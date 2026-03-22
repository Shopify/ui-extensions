import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Privacy API',
  description:
    "The Customer Privacy API provides the buyer's current privacy consent settings, including consent flags, allowed processing activities, and region information. Use this API to check consent status or determine whether to display a consent banner.",
  isVisualComponent: false,
  requires:
    'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). The `region` property requires level 1 access. The `applyTrackingConsentChange` method also requires access to protected customer data.',
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      "Read the buyer's consent settings and display the current status for each category. This example uses `useCustomerPrivacy` to access the `visitorConsent` flags for analytics, marketing, and preferences.",
    codeblock: {
      title: 'Display consent status',
      tabs: [
        {
          code: '../examples/apis/customer-privacy-display-consent-status.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/customer-privacy-display-consent-status.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        "The `StandardApi` object provides the buyer's privacy consent settings. Access the following properties on the `StandardApi` object to read privacy data.",
      type: 'Docs_Standard_CustomerPrivacyApi',
    },
    {
      title: 'useCustomerPrivacy',
      description:
        "Returns the buyer's current privacy consent settings, including consent flags and allowed processing activities.",
      type: 'UseCustomerPrivacyGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Check `shouldShowBanner` before displaying a consent banner**: The `shouldShowBanner` flag accounts for the buyer's current consent, the shop's region configuration, and the buyer's location.\n- **Use `allowedProcessing` for data decisions**: Check the `allowedProcessing` flags before collecting analytics, marketing, or preference data.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Applying tracking consent changes requires the [`customer_privacy` capability](/docs/api/customer-account-ui-extensions/latest#configuration) to be enabled in your extension's configuration.\n- The `region` property requires level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). Without this access, the visitor's location is unavailable.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          "Check whether a consent banner should display based on the buyer's privacy settings. This example uses `useCustomerPrivacy` to read the `shouldShowBanner` flag and conditionally renders the banner.",
        codeblock: {
          title: 'Check banner requirement',
          tabs: [
            {
              code: '../examples/apis/customer-privacy-check-banner-requirement.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/customer-privacy-check-banner-requirement.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          "Read the buyer's region information and display the detected country and province. This example uses `useCustomerPrivacy` to access the `region` property and handles cases where geolocation data is unavailable.",
        codeblock: {
          title: 'Show region info',
          tabs: [
            {
              code: '../examples/apis/customer-privacy-show-region-info.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/customer-privacy-show-region-info.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
