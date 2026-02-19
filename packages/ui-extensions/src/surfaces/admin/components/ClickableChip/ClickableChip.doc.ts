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
        'The clickable chip component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ClickableChipEvents',
    },
    {
      title: 'Slots',
      description:
        'The clickable chip component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ClickableChipSlots',
    },
  ],
  defaultExample: {
    image: 'clickable-chip-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
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
              'Demonstrates a simple clickable chip with a base color and interactive functionality.',
            codeblock: {
              title: 'Basic Usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a strong-colored clickable chip with a check circle icon and a removable state.',
            codeblock: {
              title: 'With Icon and Remove Button',
              tabs: [
                {
                  code: './examples/with-icon-and-remove-button.html',
                  language: 'html',
                },

                {
                  code: './examples/with-icon-and-remove-button.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a subdued clickable chip configured as a link with a product icon.',
            codeblock: {
              title: 'As a Link',
              tabs: [
                {
                  code: './examples/as-a-link.html',
                  language: 'html',
                },

                {
                  code: './examples/as-a-link.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.',
            codeblock: {
              title: 'Disabled State',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.',
            codeblock: {
              title: 'Multiple Chips with Proper Spacing',
              tabs: [
                {
                  code: './examples/multiple-chips-with-proper-spacing.html',
                  language: 'html',
                },

                {
                  code: './examples/multiple-chips-with-proper-spacing.jsx',
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
