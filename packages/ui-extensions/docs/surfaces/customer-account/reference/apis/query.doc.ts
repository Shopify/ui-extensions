import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Storefront API',
  description: 'Querying the Storefront API.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_QueryApi',
    },
  ],
  defaultExample: {
    description: `
    You can access the [Storefront GraphQL API](/docs/api/storefront) via the \`query()\` helper function.
    Ensure your extension can use this API by [enabling the \`api_access\` capability](/docs/api/customer-account-ui-extensions/configuration#api-access).`,
    codeblock: {
      title: 'Access the Storefront API with query',
      tabs: [
        {
          code: '../examples/apis/query.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/query.example.ts',
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
        You can access the [Storefront GraphQL API](/docs/api/storefront) using global \`fetch()\`.
        Ensure your extension can access the Storefront API via the [\`api_access\` capability](/docs/api/customer-account-ui-extensions/configuration#api-access).`,
        codeblock: {
          title: 'Accessing the Storefront API with fetch()',
          tabs: [
            {
              code: '../examples/apis/query-fetch.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/query-fetch.example.ts',
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
