import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Popover';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/popover.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Usage',
      type: 'Generic' as const,
      anchorLink: 'usage',
      sectionContent: `Popovers are closed by default and should be triggered by a button using the \`commandFor\` attribute. The button's \`commandFor\` value should match the popover's \`id\`. The popover's position is determined by the button that triggers it.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use for secondary or less important information and actions since they're hidden until triggered
- Contain actions that share a relationship to each other
- Be triggered by a clearly labeled default or tertiary button`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Popovers can only be opened by user interaction, not programmatically on page load
- The popover position is determined by the trigger button and cannot be manually overridden
- Content within the popover does not scroll automatically; use \`Box\` or \`Section\` for internal scrolling if needed`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Popover` component.',
      type: 'Popover',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/polaris/using-polaris-web-components#event-handling).',
      type: 'PopoverEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'PopoverSlots',
    },
  ],
  defaultExample: {
    description:
      'Show a menu of actions from a trigger button. Click to interact with the preview.',
    codeblock: {
      title: 'Show a menu of actions',
      tabs: [
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'alignStart',
          customStyles: {
            minHeight: '300px',
          },
        },
        {
          code: './examples/default.html',
          language: 'preview',
          layout: 'alignStart',
          customStyles: {
            minHeight: '300px',
          },
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
              'Display a notification list with new orders, inventory alerts, and payment confirmations. Click to interact with the preview.',
            codeblock: {
              title: 'Display notification list',
              tabs: [
                {
                  code: './examples/notifications.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
                {
                  code: './examples/notifications.html',
                  language: 'preview',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Configure settings with a choice list and apply button. Click to interact with the preview.',
            codeblock: {
              title: 'Configure table display options',
              tabs: [
                {
                  code: './examples/table-display-options.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
                {
                  code: './examples/table-display-options.html',
                  language: 'preview',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Show detailed inventory information using `Box` padding instead of `Section`. Click to interact with the preview.',
            codeblock: {
              title: 'Show inventory details',
              tabs: [
                {
                  code: './examples/inventory-stock-details.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
                {
                  code: './examples/inventory-stock-details.html',
                  language: 'preview',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '350px',
                  },
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Complete workflow',
        examples: [
          {
            description:
              'Build a filter popover with a choice list, apply and clear buttons, and dynamic trigger text. Click to interact with the preview.',
            codeblock: {
              title: 'Filter with apply and clear',
              tabs: [
                {
                  code: './examples/filter-with-apply-and-clear.html',
                  language: 'preview',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '320px',
                  },
                },
                {
                  code: './examples/filter-with-apply-and-clear.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '320px',
                  },
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
