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
              'Popover with multiple action buttons demonstrating how popovers can provide contextual actions without cluttering the main interface.',
            codeblock: {
              title: 'Popover with action buttons',
              tabs: [
                {
                  code: './examples/product-status-quick-actions.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
                {
                  code: './examples/product-status-quick-actions.html',
                  language: 'preview',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '300px',
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
              'Popover with a search field and list of results demonstrating how popovers can support dynamic content, interactive elements, and automatic resizing.',
            codeblock: {
              title: 'Popover with search field',
              tabs: [
                {
                  code: './examples/customer-search-with-results.jsx',
                  language: 'preview-jsx',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '500px',
                  },
                },
                {
                  code: './examples/customer-search-with-results.html',
                  language: 'preview',
                  layout: 'alignStart',
                  customStyles: {
                    minHeight: '500px',
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
