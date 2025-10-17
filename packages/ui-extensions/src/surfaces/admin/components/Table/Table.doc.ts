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
          layout: 'section',
        },
      ],
    },
  },
  related: [
    {
      name: 'Index table',
      subtitle: 'Composition',
      url: '/docs/api/app-home/patterns/compositions/index-table',
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
            description: 'Tables expand to full width by default.',
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
              'Add pagination controls for navigating large datasets.',
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
            description: 'Display a loading state while fetching data.',
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
            description: 'Display multiple columns in a full-width table.',
            codeblock: {
              title: 'Full-width table with multiple columns',
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
              'Display data using the list variant with specialized slot types. List is the default variant on mobile devices.',
            codeblock: {
              title: 'List Variant',
              tabs: [
                {
                  code: './examples/list-variant.html',
                  language: 'html',
                },
                {
                  code: './examples/list-variant.jsx',
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
