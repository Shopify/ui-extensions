import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Search field',
  description:
    'The search field component captures search terms for filtering and search functionality. Use it to enable inline search within specific sections or lists, like filtering products or searching customers.',
  thumbnail: 'search-field-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the search field component.',
      type: 'SearchField',
    },
    {
      title: 'Events',
      description:
        'The search field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'SearchFieldEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'search-field-default.png',
    description:
      'Enable search functionality using a search field component. This example shows a basic search field with placeholder text.',
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
- **Use for inline search and filtering:** Choose search field for filtering within specific sections or lists, not for global navigation or complex multi-step searches.
- **Follow placeholder pattern:** Use "Search {items}" format like "Search products" or "Search customers" to clarify scope.
- **Choose the right event:** Use \`input\` for real-time filtering as users type. Use \`change\` for expensive operations that should wait until typing completes.
- **Handle empty values:** When the field is cleared, reset filters or show all items appropriately.
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
