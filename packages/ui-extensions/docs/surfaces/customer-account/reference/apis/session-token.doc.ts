import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Session Token',
  description: 'The API for interacting with session tokens.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.title,
      description: CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION.description,
      type: 'Docs_Standard_SessionTokenApi',
    },
    {
      title: 'useSessionToken',
      description: 'Returns a the session token API object.',
      type: 'UseSessionTokenGeneratedType',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Using a session token with fetch()',
      tabs: [
        {
          code: '../examples/apis/session-token.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/session-token.example.ts',
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
          "The contents of the token are signed using your shared app secret. The optional `sub` claim contains the customer's `gid` if they are logged in and your app has permission to read customer accounts. For example, a loyalty app that needs to check a customer's point balance can use the `sub` claim to verify the customer's account.",
        codeblock: {
          title: 'Session token claims',
          tabs: [
            {
              code: '../examples/apis/session-token-jwt.example.json',
              language: 'json',
              title: 'Session token claims',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
