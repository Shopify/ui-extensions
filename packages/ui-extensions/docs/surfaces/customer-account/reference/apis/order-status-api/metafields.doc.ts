import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Metafields API',
  description:
    "The Metafields API provides read-only access to [metafields](/docs/apps/build/custom-data/metafields) declared in your extension's configuration on the order status page. Use this API to read custom data from products, variants, customers, the shop, and other Shopify resources associated with the order.",
  isVisualComponent: false,
  requires:
    'level 1 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) when accessing metafields attached to `customer`, `company`, or `companyLocation` resources.',
  category: 'Target APIs',
  subCategory: 'Order APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides metafields requested by your extension. Access the following properties on the `OrderStatusApi` object to read custom metadata attached to Shopify resources associated with the order.',
      type: 'Docs_OrderStatus_MetafieldsApi',
    },
  ],
  defaultExample: {
    description:
      "Read product metafields to display additional information such as care instructions. This example filters `shopify.appMetafields` by `target.type === 'product'` and looks up a specific namespace and key to render the metafield value.",
    codeblock: {
      title: 'Display product care instructions',
      tabs: [
        {
          code: '../../examples/apis/metafields-product.example.jsx',
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
          'Separate metafields by the type of Shopify resource they belong to. This example groups entries from `shopify.appMetafields` by `target.type` into product, variant, and shop categories, then displays each group.',
        codeblock: {
          title: 'Filter metafields by resource type',
          tabs: [
            {
              code: '../../examples/apis/metafields-filter-resource.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          "Display a customer's loyalty tier from a customer metafield. This example finds the metafield entry where `target.type === 'customer'` and renders the loyalty tier value in a banner.",
        codeblock: {
          title: 'Show a customer loyalty tier',
          tabs: [
            {
              code: '../../examples/apis/metafields-customer-loyalty.example.jsx',
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
        '- **Filter by resource type**: The `appMetafields` array can contain metafields from multiple resource types (products, variants, customers, shop, and more). Filter entries by `target.type` to find the metafields you need.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Only metafields declared in your [`shopify.extension.toml`](/docs/api/customer-account-ui-extensions/latest#configuration) file are available. Undeclared metafields aren't returned.\n- Metafield values are returned as strings regardless of their content type. If a metafield contains JSON or other structured data, you need to parse it in your extension.",
    },
  ],
  related: [],
};

export default data;
