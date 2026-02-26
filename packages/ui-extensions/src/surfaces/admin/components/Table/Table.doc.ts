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
    description:
      'Create a data table with header columns and rows of structured content. This example shows a customer table with name, email, order count, and phone columns.',
    codeblock: {
      title: 'Add a data table',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
        title: '',
        examples: [
          {
            description:
              'Use `listSlot` on table headers to control how columns display when the table converts to a list layout on mobile. This example shows a product table with badges and appropriate slot assignments for mobile readability.',
            codeblock: {
              title: 'Configure columns for mobile list layout',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Add `paginate`, `hasPreviousPage`, and `hasNextPage` to display pagination controls for navigating large datasets. This example shows a paginated product table with next and previous page buttons.',
            codeblock: {
              title: 'Add pagination for large datasets',
              tabs: [
                {
                  code: './examples/with-pagination.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set the `loading` property to display a loading overlay while fetching or refreshing table data. This example shows a product table with the loading state active.',
            codeblock: {
              title: 'Show a loading state while fetching data',
              tabs: [
                {
                  code: './examples/with-loading-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use the `filters` slot to add search or filter controls above the table. This example shows a search field that lets merchants filter products by name.',
            codeblock: {
              title: 'Add a search filter to a table',
              tabs: [
                {
                  code: './examples/with-filters.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set `variant` to list to display data as stacked key-value pairs instead of a grid. This is the default layout on mobile devices. This example shows a customer table rendered in list format.',
            codeblock: {
              title: 'Display data in list format',
              tabs: [
                {
                  code: './examples/list-variant.html',
                  language: 'preview',
                  title: '',
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
