import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Metafields API',
  description:
    'The Metafields API provides the app metafields and order metafields associated with the order. Use this API to read custom data that your app or other apps have stored on order resources.',
  isVisualComponent: false,
  requires:
    'level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) when accessing metafields attached to `customer`, `company`, or `companyLocation` resources.',
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  defaultExample: {
    description:
      "Read the app metafields configured in the extension TOML and display each entry. This example uses the `useAppMetafields` hook and render each metafield's key, namespace, and value.",
    codeblock: {
      title: 'Display app metafields',
      tabs: [
        {
          code: '../../examples/apis/metafields-display-app-metafields.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/metafields-display-app-metafields.example.ts',
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
        'The `OrderStatusApi` object provides app metafields and order metafields. Access the following properties on the `OrderStatusApi` object to read metafield data.',
      type: 'Docs_OrderStatus_MetafieldsApi',
    },
    {
      title: 'useAppMetafields',
      description:
        'Returns the metafields configured in the [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/latest#configuration) file.',
      type: 'UseAppMetafieldsGeneratedType',
    },
    {
      title: 'useMetafield',
      description:
        'Returns a single metafield matching the specified namespace and key, or `undefined` if no match is found.',
      type: 'UseMetafieldGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Configure app metafields in your TOML file**: App metafields must be declared in your [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/latest#configuration) before they're available through the `appMetafields` property.\n- **Use `useMetafield` for order metafield lookups**: When you need a specific order metafield, use `useMetafield` with the namespace and key instead of filtering the full `metafields` list.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- App metafields must be declared in your [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/latest#configuration) file before they're available through `appMetafields`. Undeclared app metafields aren't returned.\n- Order metafields are shared across all extensions on the order status page and don't require TOML configuration.\n- Metafield values are returned as strings regardless of their content type. If a metafield contains JSON or other structured data, you need to parse it in your extension.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'Filter app metafields to show only product-type entries. This example uses `useAppMetafields` and filters the results by the `target.type` property.',
        codeblock: {
          title: 'Filter product metafields',
          tabs: [
            {
              code: '../../examples/apis/metafields-filter-product-metafields.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/metafields-filter-product-metafields.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Read the order metafields and display them in a list. This example uses the `useMetafield` hook to look up a specific metafield by namespace and key.',
        codeblock: {
          title: 'Read order metafields',
          tabs: [
            {
              code: '../../examples/apis/metafields-read-order-metafields.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/metafields-read-order-metafields.example.ts',
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
