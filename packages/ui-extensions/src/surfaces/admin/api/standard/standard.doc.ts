import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description:
    'The Standard API provides core functionality available to all admin UI extension types. Use this API to query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, navigate within the admin, and handle intent-based navigation.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Retrieve an authentication token and use it to fetch data from your app backend. This example gets the ID token, adds it to request headers, and displays loading states while fetching.',
    codeblock: {
      title: 'Authenticate backend requests',
      tabs: [
        {
          title: 'React',
          code: './examples/authenticate-backend-request.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/authenticate-backend-request.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `StandardApi` object provides core properties available to all extension targets. Access the following properties on the `StandardApi` object to identify your extension target, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, navigate to other admin pages, and handle intents from other extensions.',
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
              title: 'React',
              code: './examples/query-and-mutate.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/query-and-mutate.ts',
              language: 'ts',
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
              title: 'React',
              code: './examples/persist-settings.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/persist-settings.ts',
              language: 'ts',
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
        '- **Batch GraphQL queries:** Combine multiple queries in a single GraphQL request using aliases to reduce roundtrips and improve performance under rate limits.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- GraphQL queries share [rate limits](/docs/api/usage/limits) with your app's overall Admin API usage and are subject to the shop's installed [access scopes](/docs/api/usage/access-scopes).",
    },
  ],
};

export default data;
