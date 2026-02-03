import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description:
    'The Standard API provides core functionality available to all Admin UI extension types. Use this API to authenticate with your app backend, query the [GraphQL Admin API](/docs/api/admin-graphql), and translate content.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description:
        'The `StandardApi` object provides core methods available to all extension targets. Access the following properties on the `StandardApi` object to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), and translate content.',
      type: 'StandardApi',
    },
  ],
  defaultExample: {
    description:
      'Retrieve an authentication token and fetch data from your app backend. This example shows using `auth.idToken()` to get an ID token and adding it to the Authorization header.',
    codeblock: {
      title: 'Authenticate backend requests',
      tabs: [
        {code: './examples/authenticate-backend-request.ts', language: 'ts'},
        {code: './examples/authenticate-backend-request.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Standard API patterns',
    examples: [
      {
        description:
          'Query products via GraphQL then update the first product with new tags. This example demonstrates chaining a query and mutation together to update the product with "processed" and "reviewed" tags.',
        codeblock: {
          title: 'Query and mutate product data',
          tabs: [
            {code: './examples/query-and-mutate.ts', language: 'ts'},
            {code: './examples/query-and-mutate.tsx', language: 'tsx'},
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
