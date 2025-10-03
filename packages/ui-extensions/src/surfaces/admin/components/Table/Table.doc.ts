import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Table';

import tableBodySharedContent from '../../../../docs/shared/components/TableBody';
import tableCellSharedContent from '../../../../docs/shared/components/TableCell';
import tableHeaderSharedContent from '../../../../docs/shared/components/TableHeader';
import tableHeaderRowSharedContent from '../../../../docs/shared/components/TableHeaderRow';
import tableRowSharedContent from '../../../../docs/shared/components/TableRow';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/table.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Table',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableSlots',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'TableEvents',
    },
    {
      title: tableBodySharedContent.name,
      description: tableBodySharedContent.description,
      type: 'TableBody',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableBodySlots',
    },
    {
      title: tableCellSharedContent.name,
      description: tableCellSharedContent.description,
      type: 'TableCell',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableCellSlots',
    },
    {
      title: tableHeaderSharedContent.name,
      description: tableHeaderSharedContent.description,
      type: 'TableHeader',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableHeaderSlots',
    },
    {
      title: tableHeaderRowSharedContent.name,
      description: tableHeaderRowSharedContent.description,
      type: 'TableHeaderRow',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableHeaderRowSlots',
    },
    {
      title: tableRowSharedContent.name,
      description: tableRowSharedContent.description,
      type: 'TableRow',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TableRowSlots',
    },
  ],
  defaultExample: {
    image: 'table-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'section',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  related: [
    {
      name: 'Index table',
      subtitle: 'Composition',
      url: 'docs/api/app-home/patterns/compositions/index-table',
      type: 'component',
    },
  ],
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Tables are full-width by default to utilize all available space for displaying data.',
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
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a table with pagination controls, showing how to add previous and next page functionality to handle large datasets.',
            codeblock: {
              title: 'With Pagination',
              tabs: [
                {
                  code: './examples/with-pagination.html',
                  language: 'html',
                },

                {
                  code: './examples/with-pagination.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              "Showcases the table's loading state, which can be used to indicate that data is being fetched or processed.",
            codeblock: {
              title: 'With Loading State',
              tabs: [
                {
                  code: './examples/with-loading-state.html',
                  language: 'html',
                },
                {
                  code: './examples/with-loading-state.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                },
              ],
            },
          },
          {
            description:
              'A comprehensive example showing a full-width table with multiple columns for product management. Tables automatically expand to fill their container width.',
            codeblock: {
              title: 'Full-Width Product Inventory Table',
              tabs: [
                {
                  code: './examples/full-width-product-inventory-table.html',
                  language: 'html',
                },

                {
                  code: './examples/full-width-product-inventory-table.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
                  customStyles: {
                    minHeight: '400px',
                  },
                },
              ],
            },
          },
          {
            description:
              'A comprehensive example demonstrating different list slot types for various header and cell configurations, showing how to use kicker, primary, secondary, inline, and labeled slots.',
            codeblock: {
              title: 'Advanced Table with All List Slot Types',
              tabs: [
                {
                  code: './examples/advanced-table-with-all-list-slot-types.html',
                  language: 'html',
                },

                {
                  code: './examples/advanced-table-with-all-list-slot-types.jsx',
                  language: 'preview-jsx',
                  layout: 'padding',
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
