import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Shop API',
  description:
    'The Shop API provides information about the store where the order was placed, including its name, ID, storefront URL, and myshopify.com domain. Use this API to display shop details or build links back to the storefront.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      "Read the shop's name and storefront URL and display them. This example uses the `useShop` hook to access the `name` and `storefrontUrl` properties.",
    codeblock: {
      title: 'Display shop info',
      tabs: [
        {
          code: '../../examples/apis/shop-display-shop-info.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/shop-display-shop-info.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides information about the shop. Access the following properties on the `OrderStatusApi` object to read shop data.',
      type: 'Docs_OrderStatus_ShopApi',
    },
    {
      title: 'useShop',
      description:
        'Returns the shop where the order was placed, including its name, ID, storefront URL, and `myshopify.com` domain.',
      type: 'UseShopGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Use `myshopifyDomain` for stable identification**: The `myshopifyDomain` doesn't change when the merchant updates their custom domain. Use it for API calls or stable references.\n- **Check for `storefrontUrl`**: The `storefrontUrl` is optional and reflects the merchant's custom domain. Fall back to `myshopifyDomain` when building links if it's `undefined`.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The Shop API provides only basic shop identification. For detailed shop settings such as currency, timezone, or plan information, use the [GraphQL Admin API](/docs/api/admin-graphql) through a backend service.',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          "Read the shop's `myshopify.com` domain and display it as an identifier. This example uses `useShop` to access the stable `myshopifyDomain` property.",
        codeblock: {
          title: 'Identify shop domain',
          tabs: [
            {
              code: '../../examples/apis/shop-identify-shop-domain.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/shop-identify-shop-domain.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Use the storefront URL to build a link back to the shop. This example uses `useShop` and falls back to `myshopifyDomain` when `storefrontUrl` is `undefined`.',
        codeblock: {
          title: 'Build a storefront link',
          tabs: [
            {
              code: '../../examples/apis/shop-build-storefront-link.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/shop-build-storefront-link.example.ts',
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
