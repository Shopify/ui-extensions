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
    description:
      'Indicate fulfilled, partially fulfilled, and unfulfilled order states with color-coded labels. This example renders three `Badge` components using `success`, `warning`, and `critical` tones to visually distinguish each state.',
    codeblock: {
      title: 'Display order fulfillment status',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Badge/examples/basic-badge.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-badge.example.ts',
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
          'Pair a status `icon` with `tone` to create scannable inventory alerts in a [block extension](/docs/api/admin-extensions/{API_VERSION}/components/settings-and-templates/adminblock). This example renders badges with contextual icons like `CircleTickMajor` and `DiamondAlertMajor`, giving merchants a compact visual summary of product availability.',
        codeblock: {
          title: 'Add icons to stock alerts',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Badge/examples/badge-icons.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/badge-icons.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Display compact sales channel labels alongside product metadata. This example uses `size="small-100"` and renders multiple badges in an [InlineStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/inlinestack), using `tone` to differentiate active channels from pending ones.',
        codeblock: {
          title: 'Label product sales channels',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Badge/examples/badge-sizes.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/badge-sizes.example.ts',
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
      sectionContent: `- **Keep labels to one or two words:** Use concise labels like **Fulfilled**, **Pending**, or **Out of stock**. Use past tense for completed actions: **Refunded**, not **Refund**.
- **Use tones consistently:** Use the same tone for the same status across your entire extension. Don't mix \`warning\` and \`critical\` for the same severity level — merchants will lose trust in the signal if tones are inconsistent.
- **Position badges near the content they describe:** In list items, place badges adjacent to the title. This makes them easy to scan without disrupting the reading flow.
- **Don't use badges for interactive elements:** Badges are static, system-generated indicators. For removable tags or merchant-created labels, use a different pattern.
- **Use icons to reinforce meaning:** When adding an icon, choose one that reinforces the badge's message.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Badge supports only two sizes: \`small-100\` and \`base\`.
- Badge text doesn't wrap to multiple lines. Long labels will be clipped, so keep text concise.
- Only icons from the [Polaris icon set](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/media-and-visuals/icon#available-icons) are supported through the \`icon\` prop. Custom icons or images can't be used inside a badge.
- Badge isn't interactive. It doesn't support click handlers or navigation. For interactive status indicators, combine a badge with a [Pressable](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/pressable) or [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) component.`,
    },
  ],
  related: [],
};

export default data;
