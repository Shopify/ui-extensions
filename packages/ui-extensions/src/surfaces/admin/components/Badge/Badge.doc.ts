import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Badge';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/badge.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Choose the right size:** Use \`base\` size in table cells, list items, or when showing multiple badges together. Use \`large\` size for standalone badges that need emphasis, like a primary status indicator at the top of a page.
- **Keep labels to 1-2 words:** Use concise labels like **Fulfilled**, **Partially refunded**, or **Out of stock**. Always use past tense for status labels: **Refunded** not **Refund**.
- **Use appropriate tones:** Apply \`critical\` for errors or urgent issues needing action, \`warning\` for problems requiring attention, \`success\` for positive confirmations, and \`info\` for neutral statuses. Use consistent tones for the same status across your app.
- **Position in content flow:** Place badges adjacent to the items they describe. In list items, position them near the title. In tables, place them in their own column for scannability.
- **Know when not to use badges:** Badges are static, system-generated indicators. Don't use badges for merchant-created tags or removable items.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Badge text truncates with an ellipsis when it exceeds the available width. Truncated text isn't accessible via tooltip, so keep labels concise.
- Badge text never wraps to multiple lines. Long labels will truncate rather than expand the badge height.
- Only specific predefined icons from the admin icon set are supported. Custom icons or images can't be used. The icon always appears to the left of the text and can't be repositioned.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the badge component.',
      type: 'Badge',
    },
    {
      title: 'Slots',
      description:
        'The badge component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'BadgeSlots',
    },
  ],
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates how different badge tones can visually represent various order fulfillment states, enabling merchants to quickly understand order progress at a glance.',
            codeblock: {
              title: 'Order status badges',
              tabs: [
                {
                  code: './examples/order-status-badges.html',
                  language: 'html',
                },

                {
                  code: './examples/order-status-badges.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases how badges can incorporate both tones and icons to provide contextual information across different merchant scenarios, such as product management, inventory tracking, and payment status.',
            codeblock: {
              title: 'Status indicators with icons',
              tabs: [
                {
                  code: './examples/status-indicators-with-icons.html',
                  language: 'html',
                },

                {
                  code: './examples/status-indicators-with-icons.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how badges can be seamlessly integrated into table layouts to provide quick, visually distinct status indicators for individual table rows.',
            codeblock: {
              title: 'Within table context',
              tabs: [
                {
                  code: './examples/within-table-context.html',
                  language: 'html',
                },

                {
                  code: './examples/within-table-context.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the two available badge sizes for creating visual hierarchy.',
            codeblock: {
              title: 'Different sizes for emphasis',
              tabs: [
                {
                  code: './examples/different-sizes-for-emphasis.html',
                  language: 'html',
                },

                {
                  code: './examples/different-sizes-for-emphasis.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
