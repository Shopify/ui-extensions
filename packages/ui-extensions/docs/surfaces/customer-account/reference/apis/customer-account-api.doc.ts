import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Account API',
  description: `The Customer Account API lets you query the [GraphQL Customer Account API](/docs/api/customer) directly from your extension using the global \`fetch()\` function. Use this API to access detailed customer data, including profile information, order history, and saved addresses.`,
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      "Query the buyer's name from the GraphQL Customer Account API. This example uses `fetch()` with a GraphQL query for `customer { firstName lastName }` and displays the result with `useState` and `useEffect`.",
    codeblock: {
      title: "Fetch the customer's name",
      tabs: [
        {
          code: '../examples/apis/customer-account-name.example.jsx',
          language: 'jsx',
          title: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          "Fetch the buyer's past orders to display a purchase history. This example sends a GraphQL query for the last five orders and renders each order's name and total price.",
        codeblock: {
          title: 'Query order history',
          tabs: [
            {
              code: '../examples/apis/customer-account-orders.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Retrieve the buyer's saved addresses from their customer account. This example queries `customer { addresses }` via the GraphQL API and displays each address.",
        codeblock: {
          title: 'Access saved addresses',
          tabs: [
            {
              code: '../examples/apis/customer-account-addresses.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Specify an API version**: Always include a specific API version in the request URL rather than using `unstable`, to ensure consistent behavior across deployments.\n- **Handle errors gracefully**: The `fetch()` call can fail due to network issues or authentication problems. Always check the response status and handle errors appropriately.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The Customer Account API is a GraphQL API accessed using `fetch()`. It doesn't expose typed properties like other Account APIs.\n- The data available depends on the buyer's authentication state and the app's access scopes.",
    },
  ],
  related: [],
};

export default data;
