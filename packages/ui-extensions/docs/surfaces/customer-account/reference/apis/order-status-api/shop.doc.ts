import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Shop API',
  description:
    "The Shop API provides read-only access to the merchant's shop identity, including the shop ID, display name, primary storefront URL, and permanent `myshopify.com` domain. Use this API to link back to the storefront, identify the shop in backend requests, or display the shop name alongside order information.",
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        "The `OrderStatusApi` object provides information about the shop where the order was placed. Access the following properties on the `OrderStatusApi` object to read the shop's identity, name, storefront URL, and `myshopify.com` domain.",
      type: 'Docs_OrderStatus_ShopApi',
    },
  ],
  defaultExample: {
    description:
      'Create a link back to the merchant\'s online store from your extension. This example reads `shopify.shop.storefrontUrl` and renders a "Continue Shopping" button that navigates to the storefront.',
    codeblock: {
      title: 'Link to the storefront',
      tabs: [
        {
          code: '../../examples/apis/shop-storefront-link.example.jsx',
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
          "Use the shop's permanent domain as a stable identifier when communicating with a backend service. This example reads `shopify.shop.myshopifyDomain` and includes it in a POST request to an external API.",
        codeblock: {
          title: 'Identify the shop for backend calls',
          tabs: [
            {
              code: '../../examples/apis/shop-identify.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Show the shop name in your extension's UI for context. This example reads `shopify.shop.name` and renders a welcome message.",
        codeblock: {
          title: 'Display the shop name',
          tabs: [
            {
              code: '../../examples/apis/shop-name.example.jsx',
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
        "- **Use `myshopifyDomain` for reliable identification**: The `myshopifyDomain` is a stable identifier for the shop, while the `storefrontUrl` can change if the merchant updates their custom domain.\n- **Use `storefrontUrl` for customer-facing links**: When linking to the storefront from your extension, use the `storefrontUrl` property to ensure links point to the merchant's primary domain.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The Shop API provides only basic shop identification. For detailed shop settings such as currency, timezone, or plan information, use the [GraphQL Admin API](/docs/api/admin-graphql) through a backend service.',
    },
  ],
  related: [],
};

export default data;
