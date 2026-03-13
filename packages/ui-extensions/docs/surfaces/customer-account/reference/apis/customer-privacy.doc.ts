import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {
  CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  REQUIRES_PROTECTED_CUSTOMER_DATA,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Privacy API',
  description:
    "The API for interacting with a customer's privacy consent. It is similar to the [Customer Privacy API in storefront](/docs/api/customer-privacy).",
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_CustomerPrivacyApi',
    },
    {
      title: 'useCustomerPrivacy',
      description:
        'Returns the current customer privacy settings and metadata and re-renders your component if the customer privacy settings change.',
      type: 'UseCustomerPrivacyGeneratedType',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Read Customer Privacy',
      tabs: [
        {
          code: '../examples/apis/customer-privacy.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/customer-privacy.example.ts',
          language: 'js',
          title: 'JavaScript',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description: `
        You can apply changes to customer consent by using the \`applyTrackingConsentChanges\` API.
        
> Note: Requires the [\`customer_privacy\` capability](/docs/api/customer-account-ui-extensions/configuration#collect-buyer-consent) to be set to \`true\`.`,
        codeblock: {
          title: 'Use a Sheet to manage customer privacy consent',
          tabs: [
            {
              code: '../examples/apis/sheet-consent-banner-with-form.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/sheet-consent-banner-with-form.example.ts',
              language: 'js',
              title: 'JavaScript',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
