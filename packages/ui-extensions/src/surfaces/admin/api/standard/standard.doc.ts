import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description: 'This API is available to all extension types.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Retrieve an ID token for secure authentication with your app backend. Use the token in `Authorization` headers to verify requests come from authenticated merchants.',
    codeblock: {
      title: 'Authenticate backend requests',
      tabs: [
        {
          code: './examples/authenticate-backend-request.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'StandardApi',
      description: '',
      type: 'StandardApi',
    },
  ],
  examples: {
    description: 'Essential patterns for all extensions',
    examples: [
      {
        description:
          'Query and mutate data using the [GraphQL Admin API](/docs/api/admin-graphql). Fetch shop data to display in your extension and perform mutations to update resources.',
        codeblock: {
          title: 'Query and mutate data',
          tabs: [
            {
              code: './examples/query-and-mutate.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Persist user preferences and settings across sessions using browser storage. Store configuration, form state, or cached data that should survive page reloads.',
        codeblock: {
          title: 'Persist settings',
          tabs: [
            {
              code: './examples/persist-settings.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
};

export default data;
