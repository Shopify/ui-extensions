import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Authenticated Account API',
  description:
    'The API for interacting with an account in which the customer is fully authenticated.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    codeblock: {
      title: 'Show Loyalty Banner',
      tabs: [
        {
          code: '../examples/apis/authenticated-account.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/authenticated-account.example.ts',
          language: 'js',
          title: 'JavaScript',
        },
        {
          code: '../examples/apis/authenticated-account.locale.example.json',
          language: 'json',
          title: 'locales/en.default.json',
        },
      ],
    },
  },
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_AuthenticatedAccountApi',
    },
    {
      title: 'useAuthenticatedAccountCustomer',
      description:
        "Returns the current authenticated `Customer`. The value is `undefined` if the customer isn't authenticated.",
      type: 'UseAuthenticatedAccountCustomerGeneratedType',
    },
    {
      title: 'useAuthenticatedAccountPurchasingCompany',
      description:
        "Provides information about the company of the authenticated business customer. The value is `undefined` if a business customer isn't authenticated.",
      type: 'UseAuthenticatedAccountPurchasingCompanyGeneratedType',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'You can access the company and location of the authenticated business customer to implement location specific logic.',
        codeblock: {
          title: 'Getting the company and location of the customer',
          tabs: [
            {
              code: '../examples/apis/authenticated-account-company-and-location.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/authenticated-account-company-and-location.example.ts',
              language: 'js',
              title: 'JavaScript',
            },
            {
              code: '../examples/apis/authenticated-account-company-and-location.locale.example.json',
              language: 'json',
              title: 'locales/en.default.json',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
