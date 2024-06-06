import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Account API',
  description: `Create unique customer experiences with the Customer Account API. The API offers a full range of options making it possible for customers to view their orders, manage their profile and much more.`,
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  examples: {
    description: '',
    examples: [
      {
        description: `
        You can access the [Customer Account GraphQL API](/docs/api/customer) using the global \`fetch()\`.`,
        codeblock: {
          title: 'Accessing the Customer Account API with fetch()',
          tabs: [
            {
              code: '../examples/apis/customer-account-api-fetch.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/customer-account-api-fetch.example.ts',
              language: 'js',
              title: 'JavaScript',
            },
          ],
        },
      },
    ],
  },
  related: [
    {
      name: 'GraphQL Customer Account API',
      subtitle: 'Navigate to',
      url: '/docs/api/customer',
    },
  ],
};

export default data;
