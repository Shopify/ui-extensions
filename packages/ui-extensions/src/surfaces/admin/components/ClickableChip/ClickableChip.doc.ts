import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ClickableChip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/clickable-chip.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Keep labels to 1-3 words:** Aim for labels like **Electronics**, **Summer sale**, or **Clearance items**.
- **Choose color variants by importance:** Use \`subdued\` for less important or secondary chips, \`base\` (default) for standard selections, and \`strong\` to emphasize primary or active selections.
- **Make remove action clear:** When chips are removable, ensure the remove button's visible and has clear hover/focus states.
- **Group related chips together:** Use an inline [stack](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/stack) to arrange multiple chips horizontally with consistent spacing.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the clickable chip component.',
      type: 'ClickableChip',
    },
    {
      title: 'Events',
      description:
        'The clickable chip component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'ClickableChipEvents',
    },
    {
      title: 'Slots',
      description:
        'The clickable chip component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-polaris-web-components#slots).',
      type: 'ClickableChipSlots',
    },
  ],
  defaultExample: {
    image: 'clickablechip-default.png',
    description:
      'Create an interactive chip that merchants can click to trigger an action. This example shows a clickable chip component with default styling.',
    codeblock: {
      title: 'Add a clickable chip with default styling',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
              'Use the `color` property to visually distinguish chips by importance or category. This example shows three chips with `base`, `subdued`, and `strong` color variants.',
            codeblock: {
              title: 'Apply color variants to chips',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add an icon and a remove button so merchants can see the status and dismiss the chip. This example shows a removable chip with a check circle icon in the graphic slot.',
            codeblock: {
              title: 'Add an icon and a remove button to a chip',
              tabs: [
                {
                  code: './examples/with-icon-and-remove-button.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set the `href` property to make a chip link to another page when clicked. This example shows a subdued chip with a product icon that acts as a link.',
            codeblock: {
              title: 'Use a chip as a link',
              tabs: [
                {
                  code: './examples/as-a-link.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Disable a chip to prevent interaction while keeping it visible. This example shows a disabled chip with an accessibility label explaining the inactive state.',
            codeblock: {
              title: 'Disable a clickable chip',
              tabs: [
                {
                  code: './examples/disabled-state.html',
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
