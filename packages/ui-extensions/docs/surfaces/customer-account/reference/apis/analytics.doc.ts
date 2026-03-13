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
      title: 'Publish',
      tabs: [
        {
          code: '../examples/apis/analytics-publish.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/analytics-publish.example.ts',
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
        description:
          'You can submit visitor information to Shopify, these will be sent to the shop backend and not be propagated to web pixels on the page.',
        codeblock: {
          title: 'Visitor',
          tabs: [
            {
              code: '../examples/apis/analytics-visitor.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/analytics-visitor.example.ts',
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
