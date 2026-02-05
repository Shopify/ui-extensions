import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description:
    'The Standard API provides core functionality available to all Admin UI extension types. Use this API to authenticate with your app backend, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle navigation [intents](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/intents-api), and persist data in browser storage.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Retrieve an authentication token to securely fetch data from your app backend, enabling personalized content, inventory sync, or external integrations. This example demonstrates getting the ID token using `auth.idToken()`, adding it to Authorization headers, displaying loading states on the [`Button`](/docs/api/admin-extensions/{API_VERSION}/components/actions/button) during fetch, and showing the count of loaded products.',
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
      title: 'StandardApi',
      description:
        'The `StandardApi` object provides core methods available to all extension targets. Access the following properties on the `StandardApi` object to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle intents, and persist data.',
      type: 'StandardApi',
    },
  ],
  examples: {
    description: 'Essential patterns for all extensions',
    examples: [
      {
        description:
          'Query products using the [GraphQL Admin API](/docs/api/admin-graphql/), then update the first product with new tags for workflow automation or bulk operations. This example demonstrates chaining a query and mutation together, displaying the count of queried products, and showing success feedback when tags are applied.',
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
        '- **Handle GraphQL partial data:** Check both `errors` and `data` in query responses. GraphQL returns partial data with errors when some fields fail but others succeed.
' +
        '- **Batch GraphQL queries:** Combine multiple queries in a single GraphQL request using aliases to reduce roundtrips and improve performance under rate limits.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- GraphQL queries share [rate limits](/docs/api/usage/limits) with your app's overall Admin API usage and are subject to the shop's installed [access scopes](/docs/api/usage/access-scopes).
" +
        "- ID tokens from `auth.idToken()` are short-lived JWTs. They expire quickly and shouldn\'t be stored long-term.",
    },
  ],
};

export default data;
