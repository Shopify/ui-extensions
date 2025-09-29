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
          code: './examples/default.html',
          language: 'preview',
          layout: 'alignStart',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'alignStart',
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
              "Demonstrates a popover with multiple action buttons for quickly changing a product's status, showing how popovers can provide contextual actions without cluttering the main interface.",
            codeblock: {
              title: 'Product status quick actions',
              tabs: [
                {
                  code: './examples/product-status-quick-actions.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              "Shows a popover for customizing table columns, demonstrating how popovers can be used for settings and configuration interfaces that don't require a full page or modal.",
            codeblock: {
              title: 'Table display options',
              tabs: [
                {
                  code: './examples/table-display-options.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Exhibits a popover with an embedded search field and search results, highlighting how popovers can support dynamic content and interactive search functionality.',
            codeblock: {
              title: 'Customer search with results',
              tabs: [
                {
                  code: './examples/customer-search-with-results.html',
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
