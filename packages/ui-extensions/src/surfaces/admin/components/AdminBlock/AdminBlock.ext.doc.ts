import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Admin block',
  description:
    'The admin block component enables admin block extensions to appear inline on resource pages. Use admin block to create embedded extension experiences that feel native to the Shopify admin interface, with automatic height management, expansion controls, and content overflow handling.' +
    '\n\nLearn how to [build an admin block extension](/docs/apps/build/admin/actions-blocks/build-admin-block).',
  requires:
    'the [Block Extension API](/docs/api/admin-extensions/{API_VERSION}/target-apis/core-apis/block-extension-api), [Product Details Configuration API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/product-details-configuration-api), or [Product Variant Details Configuration API](/docs/api/admin-extensions/{API_VERSION}/target-apis/contextual-apis/product-variant-details-configuration-api).',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminblock.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the admin block component.',
      type: 'AdminBlockProps',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Settings and templates',
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Provide clear context:** Ensure merchants understand what the block contains and its purpose at a glance, without needing to expand or interact with it.
- **Use the collapsed summary effectively:** Write concise summaries that give merchants key information when the block is collapsed.
- **Structure content by priority:** Place the most important information at the top. Use collapsible sections, tabs, or progressive disclosure for secondary details.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- When your block's content exceeds 300px in height, Shopify automatically displays a **Show more** button. This button can't be removed or disabled. It's a core part of how admin blocks maintain page performance.
- After merchants click **Show more**, blocks can expand up to their maximum allowed height. Content that exceeds this limit will be cut off.
- When content's too large for the block, merchants see a link to view the full extension in your app. This ensures all content remains accessible.
- Summaries longer than 30 characters will be automatically truncated.
- During development, you'll see console warnings when your content exceeds height limits, helping you optimize your block's layout.`,
    },
  ],
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminblock-example.png',
    description:
      'Display an inline block on an admin resource page. This example shows a simple block with a [heading](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/typography-and-content/heading) and [text](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/typography-and-content/text) content.',
    codeblock: {
      title: 'Display an inline admin block',
      tabs: [
        {
          title: '',
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
  examples: {
    description: '',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Provide a preview of the block content when it is collapsed. This example uses the `collapsed-summary` attribute to show a short [text](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/typography-and-content/text) summary in the block header.',
            codeblock: {
              title: 'Show a collapsed summary',
              tabs: [
                {
                  title: '',
                  code: './examples/with-collapsed-summary.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Present structured data in rows and columns within a block. This example displays inventory levels across locations using a [table](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/layout-and-structure/table).',
            codeblock: {
              title: 'Display a data table',
              tabs: [
                {
                  title: '',
                  code: './examples/with-data-table.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Highlight key status information with visual indicators. This example shows an order risk assessment with a warning [badge](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/feedback-and-status-indicators/badge) and a list of risk factors.',
            codeblock: {
              title: 'Show status with badges',
              tabs: [
                {
                  title: '',
                  code: './examples/with-badges.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Include interactive buttons so merchants can take action directly from the block. This example shows subscription details with a [button group](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/actions/button-group) for pause and cancel actions.',
            codeblock: {
              title: 'Add action buttons to a block',
              tabs: [
                {
                  title: '',
                  code: './examples/with-actions.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  related: [],
};

export default data;
