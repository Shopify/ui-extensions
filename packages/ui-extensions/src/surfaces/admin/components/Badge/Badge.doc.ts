import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'The Badge component displays a small label that communicates the status of an object, such as an order, product, or payment. It supports multiple tones to convey meaning at a glance and can include an icon for additional visual context.\n\nFor prominent, dismissible messages with actions, use [Banner](/docs/api/admin-extensions/{API_VERSION}/ui-components/feedback-and-status-indicators/banner).',
  requires: '',
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Badge component.',
      type: 'BadgeProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Feedback and status indicators',
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Simple Badge example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Badge/examples/basic-badge.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-badge.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Keep labels to one or two words:** Use concise labels like **Fulfilled**, **Pending**, or **Out of stock**. Use past tense for completed actions: **Refunded**, not **Refund**.
- **Use tones consistently:** Apply \`critical\` for errors or issues needing immediate action, \`warning\` for problems that need attention, \`success\` for positive confirmations, and \`info\` for neutral statuses. Use the same tone for the same status across your entire extension.
- **Position badges near the content they describe:** In list items, place badges adjacent to the title. This makes them easy to scan without disrupting the reading flow.
- **Don't use badges for interactive elements:** Badges are static, system-generated indicators. For removable tags or merchant-created labels, use a different pattern.
- **Use icons to reinforce meaning:** When adding an icon, choose one that reinforces the badge's message.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Badge only supports two sizes: \`small-100\` and \`base\`. There is no large badge option.
- Badge text doesn't wrap to multiple lines. Long labels will be clipped, so keep text concise.
- Only icons from the Shopify admin icon set are supported through the \`icon\` prop. Custom icons or images can't be used inside a badge.
- Badge isn't interactive. It doesn't support click handlers or navigation. For interactive status indicators, combine a badge with a [Pressable](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/pressable) or [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) component.`,
    },
  ],
  related: [],
};

export default data;
