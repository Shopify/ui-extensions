import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description:
    'The Standard API provides core functionality available to all admin UI extension types. Use this API to authenticate with your app backend, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle navigation [intents](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/intents-api), and persist data in browser storage.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Retrieve an authentication token and use it to fetch data from your app backend. This example gets the ID token, adds it to request headers, and displays loading states while fetching.',
    codeblock: {
      title: 'Authenticate backend requests',
      tabs: [
        {
          title: 'jsx',
          code: './examples/authenticate-backend-request.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `StandardApi` object provides core properties available to all extension targets. Access the following properties on the `StandardApi` object to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle intents, and persist data.',
      type: 'StandardApi',
    },
  ],
  examples: {
    description: 'Essential patterns for all extensions',
    examples: [
      {
        description:
          'Query products using the [GraphQL Admin API](/docs/api/admin-graphql/), then update the first product with new tags. This example demonstrates chaining a query and mutation, handling the response data, and showing success feedback.',
        codeblock: {
          title: 'Query and mutate product data',
          tabs: [
            {
              title: 'jsx',
              code: './examples/query-and-mutate.jsx',
              language: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Save and retrieve user preferences from browser storage. This example loads saved preferences on mount, displays current values, and lets merchants update settings that persist across sessions.',
        codeblock: {
          title: 'Persist settings',
          tabs: [
            {
              title: 'jsx',
              code: './examples/persist-settings.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Handle GraphQL partial data:** Check both `errors` and `data` in query responses. GraphQL returns partial data with errors when some fields fail but others succeed.\n' +
        '- **Catch `StorageExceededError` exceptions:** `storage.set()` and `storage.setMany()` throw `StorageExceededError` when you exceed storage limits. Catch these errors and handle quota failures gracefully.\n' +
        '- **Use `storage.setMany()` for batch updates:** When updating multiple related values, use `setMany()` with an array of entries for efficient batch operations.\n' +
        '- **Batch GraphQL queries:** Combine multiple queries in a single GraphQL request using aliases to reduce roundtrips and improve performance under rate limits.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Storage is scoped per extension. Data saved by one extension is inaccessible to other extensions, even from the same app.\n' +
        "- Storage values are serialized with `JSON.stringify`, so functions, symbols, and circular references aren't supported.\n" +
        "- GraphQL queries share [rate limits](/docs/api/usage/limits) with your app's overall Admin API usage and are subject to the shop's installed [access scopes](/docs/api/usage/access-scopes).\n" +
        '- ID tokens from `auth.idToken()` are short-lived JWTs. Call `auth.idToken()` on each request instead of caching tokens.',
    },
  ],
};

export default data;
