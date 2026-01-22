import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Badge';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/badge.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Communicating the state of an object
- Identifying objects that need attention or action
- Quickly scanning complex lists to find specific object states`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- \`base\`: use in tables where many badges are displayed
- \`large\`: use when badge needs to stand out prominently
- Text truncates automatically, keep labels short to avoid truncation
- Badges are static indicators, not interactive or dismissible
- Use \`critical\` or \`warning\` tones for errors needing immediate attention
- Use consistent styles and icons for common statuses
- When using badges in line items, integrate them with the full content group rather than attaching only to the header
- Don't use badges for merchant-created information. Instead, use a Chip or ClickableChip`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `Badge labels should:
- Use 1-2 words maximum: \`Fulfilled\`, \`Partially refunded\`
- Always use past tense: \`Refunded\` not \`Refund\`
`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Badge',
    },
    {
      title: 'Slots',
      description: '',
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
