import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Authenticated Account API',
  description:
    "The Authenticated Account API provides the authenticated customer's account information, including their customer ID and B2B company details. Use this API to personalize content or implement company-specific logic.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      "Read the authenticated customer's ID and display it. This example uses `useAuthenticatedAccountCustomer` and handles the case where the customer isn't authenticated.",
    codeblock: {
      title: 'Show customer ID',
      tabs: [
        {
          code: '../examples/apis/authenticated-account-show-customer-id.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/authenticated-account-show-customer-id.example.ts',
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
        "The `StandardApi` object provides the authenticated customer's account information. Access the following properties on the `StandardApi` object to read account data.",
      type: 'Docs_Standard_AuthenticatedAccountApi',
    },
    {
      title: 'useAuthenticatedAccountCustomer',
      description:
        "Returns the authenticated customer's account information. The value is `undefined` if the customer isn't authenticated.",
      type: 'UseAuthenticatedAccountCustomerGeneratedType',
    },
    {
      title: 'useAuthenticatedAccountPurchasingCompany',
      description:
        "Returns the B2B company information for the authenticated business customer. The value is `undefined` if the customer isn't a B2B customer.",
      type: 'UseAuthenticatedAccountPurchasingCompanyGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Handle undefined customer**: The `customer` property is `undefined` when the buyer isn't authenticated. Always check before accessing customer fields.\n- **Use purchasing company for B2B logic**: The `purchasingCompany` provides the company and location for B2B customers. Use it to implement location-specific pricing or catalog restrictions.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The Authenticated Account API provides only the customer ID. For more detailed customer data such as email, name, or phone, use the [Customer Account API](/docs/api/customer-account-ui-extensions/target-apis/account-apis/customer-account-api) to query the [GraphQL Customer Account API](/docs/api/customer).',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Read the B2B company and location and display the details. This example uses `useAuthenticatedAccountPurchasingCompany` and only renders when B2B data is available.',
        codeblock: {
          title: 'Show B2B details',
          tabs: [
            {
              code: '../examples/apis/authenticated-account-show-b2b-details.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/authenticated-account-show-b2b-details.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          "Read the authenticated customer's ID and uses it to personalize a loyalty banner. This example uses `useAuthenticatedAccountCustomer` to conditionally show a loyalty message.",
        codeblock: {
          title: 'Personalize loyalty banner',
          tabs: [
            {
              code: '../examples/apis/authenticated-account-personalize-loyalty-banner.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/authenticated-account-personalize-loyalty-banner.example.ts',
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
