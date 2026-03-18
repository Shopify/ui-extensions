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
        'The badge component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-web-components#slots).',
      type: 'BadgeSlots',
    },
  ],
  defaultExample: {
    image: 'badge-default.png',
    description:
      'Create badges with different tones to represent statuses. This example shows the tones `auto` (implicit default), `info`, `success`, `caution`, `warning`, and `critical`.',
    codeblock: {
      title: 'Add status badges with tones',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
          layout: 'inline',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Combine tones with icons to provide stronger visual cues. This example shows product and inventory status badges with icons that reinforce meaning.',
            codeblock: {
              title: 'Add icons to status badges',
              tabs: [
                {
                  code: './examples/status-indicators-with-icons.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Place badges inside [table cells](/docs/api/{API_NAME}/{API_VERSION}/web-components/layout-and-structure/table) to give merchants a scannable overview of status information. This example shows fulfillment and payment badges in an order table.',
            codeblock: {
              title: 'Display badges in a table',
              tabs: [
                {
                  code: './examples/within-table-context.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use the `size` property to create visual hierarchy between badges. This example shows the base size for standard usage and the large size for badges that need more prominence.',
            codeblock: {
              title: 'Control badge size for emphasis',
              tabs: [
                {
                  code: './examples/different-sizes-for-emphasis.html',
                  language: 'preview',
                  title: '',
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
