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
    description:
      'Enable search functionality using a `SearchField` component with built-in debouncing. This example shows a basic search field with placeholder text.',
    codeblock: {
      title: 'Enable search with a search field',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use for inline search and filtering:** Choose \`SearchField\` for filtering within specific sections or lists, not for global navigation or complex multi-step searches.
- **Follow placeholder pattern:** Use "Search {items}" format like "Search products" or "Search customers" to clarify scope.
- **Choose the right event:** Use \`input\` for real-time filtering as users type. Use \`change\` for expensive operations that should wait until typing completes.
- **Handle empty values:** When the field is cleared, reset filters or show all items appropriately.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`SearchField\` provides a search input field with visual styling and clear functionality—additional search features like filters, sorting, search history, or search buttons require custom implementation.
- The component handles text input and basic interaction events—complex search workflows with multiple steps or advanced state management require additional components or custom logic.
- \`SearchField\` is optimized for inline search and filtering—displaying search results requires using other components like \`Stack\`, \`Section\`, or custom layout components to present filtered content.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to handle search input and implement real-time filtering.',
    examples: [
      {
        description:
          'Subscribe to search input events to respond when merchants enter search terms. This example demonstrates handling `onChange` and `onInput` events for real-time search functionality, debounced filtering, or triggering search API calls as merchants type their queries.',
        codeblock: {
          title: 'Handle search input events',
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
