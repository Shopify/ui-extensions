import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Analytics API',
  description: 'The API for interacting with web pixels.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_AnalyticsApi',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/apis/analytics-publish.example.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'You can submit visitor information to Shopify, these will be sent to the shop backend and not be propagated to web pixels on the page.',
        codeblock: {
          title: 'Visitor',
          tabs: [
            {
              code: '../examples/apis/analytics-visitor.example.jsx',
              language: 'jsx',
              title: 'Extension.jsx',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
