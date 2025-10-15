import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Popover';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  category: 'Polaris web components',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/popover.png',
  isVisualComponent: true,
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
