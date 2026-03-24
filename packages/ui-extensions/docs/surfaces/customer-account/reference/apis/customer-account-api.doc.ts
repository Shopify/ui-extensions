import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Account API',
  description:
    'The Customer Account API lets your extension query the Customer Account GraphQL API using the global `fetch()`. Use this API to fetch customer data like order history, addresses, and profile information.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      "Fetch the customer's display name from the Customer Account API. This example sends a GraphQL query using `fetch()` with the `shopify://` protocol and render the result.",
    codeblock: {
      title: 'Fetch customer name',
      tabs: [
        {
          code: '../examples/apis/customer-account-api-fetch-customer-name.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../examples/apis/customer-account-api-fetch-customer-name.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Use the `shopify://` protocol**: Always use `shopify://customer-account/api/` as the base URL for Customer Account API requests. Don't use absolute URLs.\n- **Handle GraphQL errors**: The API returns errors in the `errors` array of the response. Always check for errors before using the `data` field.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The Customer Account API is a GraphQL API accessed using `fetch()`. It doesn't expose typed properties like other Account APIs.\n- The data available depends on the buyer's authentication state and the app's access scopes.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          "Count the customer's past orders using the Customer Account API. This example queries the `orders` connection and displays the total number of orders placed.",
        codeblock: {
          title: 'Fetch order history',
          tabs: [
            {
              code: '../examples/apis/customer-account-api-fetch-order-history.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/customer-account-api-fetch-order-history.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          "Fetch the customer's saved addresses and display each one. This example queries the `addresses` field from the Customer Account API and renders the city, zone code, and territory code for each address.",
        codeblock: {
          title: 'Fetch customer addresses',
          tabs: [
            {
              code: '../examples/apis/customer-account-api-fetch-customer-addresses.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../examples/apis/customer-account-api-fetch-customer-addresses.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
