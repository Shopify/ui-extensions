import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description:
    'The Standard API provides core functionality available to all admin UI extension types. Use this API to authenticate with your app backend, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, and handle intent-based navigation.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Calls `auth.idToken()` to get an ID token and adds it to the Authorization header before fetching from your backend. For authenticated API requests.',
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
        'The `StandardApi` object provides core properties available to all extension targets. Access the following properties on the `StandardApi` object to identify your extension target, authenticate with your app backend, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, and handle intents from other extensions.',
      type: 'StandardApi',
    },
  ],
  examples: {
    description: 'Standard API patterns',
    examples: [
      {
        description:
          'Chains a GraphQL query and mutation together, fetching products then updating the first one with "processed" and "reviewed" tags.',
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
        "- GraphQL queries share [rate limits](/docs/api/usage/limits) with your app's overall Admin API usage and are subject to the shop's installed [access scopes](/docs/api/usage/access-scopes).\n" +
        "- ID tokens from `auth.idToken()` are short-lived JWTs. They expire quickly and shouldn't be stored long-term.",
    },
  ],
};

export default data;
