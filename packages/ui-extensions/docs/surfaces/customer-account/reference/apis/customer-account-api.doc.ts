import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Account API',
  description: `Create unique customer experiences with the Customer Account API. The API offers a full range of options making it possible for customers to view their orders, manage their profile and much more.
  
  You can access the [Customer Account GraphQL API](/docs/api/customer) using the global \`fetch()\`.
  
  The \`API_VERSION\` specified in the URL determines which version of the Customer Account API is used.
  `,
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    codeblock: {
      title: 'Extension.jsx',
      tabs: [
        {
          code: '../examples/apis/customer-account-api-fetch.example.jsx',
          language: 'jsx',
        },
      ],
    },
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
