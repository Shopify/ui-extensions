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
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for structured, comparable data:** The component works best when displaying multiple records with consistent attributes that merchants need to scan and compare. For simple lists without comparison needs, consider using a simpler component.
- **Design for mobile transformation:** The component automatically converts to a list layout on mobile devices. Ensure your column headers and data make sense when displayed as stacked key-value pairs rather than a grid.
- **Keep column counts reasonable:** Tables with many columns become difficult to scan and require horizontal scrolling. Aim for the minimum columns needed to support user tasks, and consider whether some data could be revealed on demand.
- **Provide clear column headers:** Column headers help merchants understand what each column represents. Write concise, descriptive headers that clearly identify the data type or attribute.
- **Consider data volume:** Large tables impact performance and user experience. Use pagination for datasets with more than 50-100 rows, or consider whether filtering or search would help merchants find specific records more efficiently.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't include built-in sorting or search functionality. You'll need to implement these features yourself if merchants need to organize data within the table. For filtering, use the \`filters\` slot to add filter UI such as a search field.
- The component doesn't support sticky headers that remain visible during scrolling. If merchants need to reference column headers while viewing data further down the table, consider using pagination to keep datasets smaller.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the table component.',
      type: 'Table',
    },
    {
      title: 'Slots',
      description:
        'The table component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TableSlots',
    },
    {
      title: 'Events',
      description:
        'The table component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TableEvents',
    },
    {
      title: tableBodySharedContent.name,
      description: tableBodySharedContent.description,
      type: 'TableBody',
    },
    {
      title: 'Slots',
      description:
        'The table body component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TableBodySlots',
    },
    {
      title: tableCellSharedContent.name,
      description: tableCellSharedContent.description,
      type: 'TableCell',
    },
    {
      title: 'Slots',
      description:
        'The table cell component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TableCellSlots',
    },
    {
      title: tableHeaderSharedContent.name,
      description: tableHeaderSharedContent.description,
      type: 'TableHeader',
    },
    {
      title: 'Slots',
      description:
        'The table header component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TableHeaderSlots',
    },
    {
      title: tableHeaderRowSharedContent.name,
      description: tableHeaderRowSharedContent.description,
      type: 'TableHeaderRow',
    },
    {
      title: 'Slots',
      description:
        'The table header row component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'TableHeaderRowSlots',
    },
    {
      title: tableRowSharedContent.name,
      description: tableRowSharedContent.description,
      type: 'TableRow',
    },
    {
      title: 'Slots',
      description:
        'The table row component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
  related: [],
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
