import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Popover';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  category: 'Web components',
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
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `- Use clear action verbs in the {verb}+{noun} format (e.g., "Create order", "Edit HTML")
- Avoid unnecessary words like "the", "an", or "a"`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Popover',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'PopoverEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PopoverSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
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
        title: 'Basic usage',
        examples: [
          {
            description:
              'Popover displaying admin notifications such as new orders, inventory alerts, and payment confirmations, demonstrating how popovers can show informational content without cluttering the main interface.',
            codeblock: {
              title: 'Popover with notifications',
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
              'Popover containing a choice list and action button demonstrating how popovers can be used for settings and configuration interfaces.',
            codeblock: {
              title: 'Popover with choice list',
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
              'Popover displaying detailed inventory information using Box padding instead of Section, demonstrating an alternative layout approach for data-focused content.',
            codeblock: {
              title: 'Popover with inventory details',
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
    ],
  },
};

export default data;
