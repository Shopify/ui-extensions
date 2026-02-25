import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminBlock',
  description:
    'The AdminBlock component enables admin block extensions to appear inline on resource pages. Use AdminBlock to create embedded extension experiences that feel native to the Shopify admin interface. The Shopify admin handles height management, expansion controls, and content overflow for the block.\n\nLearn how to [build an admin block extension](/docs/apps/build/admin/actions-blocks/build-admin-block).',
  requires:
    'the [Block Extension API](/docs/api/admin-extensions/{API_VERSION}/target-apis/core-apis/block-extension-api), [Product Details Configuration API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/product-details-configuration-api), or [Product Variant Details Configuration API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/product-variant-details-configuration-api).',
  thumbnail: 'adminblock-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the AdminBlock component.',
      type: 'AdminBlockProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Settings and templates',
  defaultExample: {
    image: 'adminblock-default.png',
    description:
      "Show a warehouse connection status, sync timestamp, and inventory count in a product details block. This example renders an `AdminBlock` titled 'Warehouse integration' with a `success` tone [Badge](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/badge) and status lines inside a [BlockStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/blockstack).",
    codeblock: {
      title: 'Display warehouse status block',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminBlock/examples/basic-adminblock.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-adminblock.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Fetch product data from the [GraphQL Admin API](/docs/api/admin-graphql/) and display it inside the block after loading. This example shows a [ProgressIndicator](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/progressindicator) while the query runs, then replaces it with the product title, variant count, and inventory total.',
        codeblock: {
          title: 'Load data into block extension',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminBlock/examples/adminblock-data.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/adminblock-data.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Organize block content into themed groups using [Section](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/section) components with headings. This example splits product specifications into compliance and shipping sections separated by a [Divider](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/divider).',
        codeblock: {
          title: 'Organize block with sections',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminBlock/examples/adminblock-sections.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/adminblock-sections.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Keep content concise:** Blocks share space with other admin UI on resource pages. Focus on the most relevant information and avoid overwhelming the page.
- **Design for both expanded and collapsed states:** Merchants might interact with the block in either state. Provide meaningful content in the collapsed summary so they can quickly scan the information.
- **Provide meaningful collapsed state content:** Show the most important piece of information (like a status or key value) in the collapsed summary so merchants can decide whether to expand the block.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The block's visual style and position on the resource page are determined by the merchant's configuration and can't be controlled programmatically.
- This component doesn't control whether the block starts expanded or collapsed. The initial state is managed by the Shopify admin and might vary by context.`,
    },
  ],
  related: [],
};

export default data;
