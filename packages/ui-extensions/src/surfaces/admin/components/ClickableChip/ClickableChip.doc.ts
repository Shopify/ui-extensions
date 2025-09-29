import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ClickableChip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/clickable-chip.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ClickableChip',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ClickableChipEvents',
    },
    {
      title: 'Slots',
      description: '',
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
              'Demonstrates a simple clickable chip with a base color, used for displaying an active status filter with interactive functionality.',
            codeblock: {
              title: 'Basic Usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Showcases a strong-colored clickable chip with a check circle icon and a removable state, representing an in-progress status.',
            codeblock: {
              title: 'With Icon and Remove Button',
              tabs: [
                {
                  code: './examples/with-icon-and-remove-button.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a subdued clickable chip configured as a link, with a product icon, used for navigating to a specific product page.',
            codeblock: {
              title: 'As a Link',
              tabs: [
                {
                  code: './examples/as-a-link.html',
                  language: 'preview',
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
                  language: 'preview',
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
                  language: 'preview',
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
