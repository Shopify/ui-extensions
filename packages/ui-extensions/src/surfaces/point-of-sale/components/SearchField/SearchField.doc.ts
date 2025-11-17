import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'SearchField',
  description:
    'The `SearchField` component captures search terms using a single-line input field. Use it to enable search and filtering within POS interfaces.' +
    '\n\nThe component includes built-in debouncing to optimize performance during real-time search operations and supports features like autocomplete suggestions and search history. It provides clear visual feedback for search states including loading, results found, and no results, helping merchants quickly locate products, customers, or orders in large catalogs.' +
    '\n\n`SearchField` components clear search queries with a single tap on the clear button while maintaining search history for quick access to recent searches, balancing convenience with data management.',
  thumbnail: 'search-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `SearchField` component.',
      type: 'SearchField',
    },
    {
      title: 'Events',
      description:
        'The `SearchField` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'SearchFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'search-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
  examples: {
    description: 'SearchField usage patterns',
    examples: [
      {
        description: 'Handle search input events',
        codeblock: {
          title: 'Event handling',
          tabs: [
            {
              code: './examples/event-handling.jsx',
              language: 'jsx',
            },
          ],
        },
      },
    ],
  },
};

export default data;
