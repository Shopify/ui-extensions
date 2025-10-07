import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/SearchField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/searchfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'SearchField',
      description:
        'A search input field that allows users to enter a search term.',
      type: 'SearchField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'SearchFieldEvents',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
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
              'Demonstrates a standard search input field for product discovery, with a clear label, name, and placeholder text to guide user interaction.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a search field integrated within a data table filtering scenario, paired with a clear filters button for comprehensive search and reset functionality.',
            codeblock: {
              title: 'Table filtering context',
              tabs: [
                {
                  code: './examples/table-filtering-context.html',
                  language: 'html',
                },

                {
                  code: './examples/table-filtering-context.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a global search field positioned in a page header, enabling comprehensive searching across products, variants, and SKUs.',
            codeblock: {
              title: 'Page header global search',
              tabs: [
                {
                  code: './examples/page-header-global-search.html',
                  language: 'html',
                },

                {
                  code: './examples/page-header-global-search.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a search field for customer lookup, featuring a descriptive placeholder to help users understand the expected input format.',
            codeblock: {
              title: 'Controlled component with state management',
              tabs: [
                {
                  code: './examples/controlled-component-with-state-management.html',
                  language: 'html',
                },

                {
                  code: './examples/controlled-component-with-state-management.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Highlights a search field within a modal context, including a dedicated area to display search results dynamically.',
            codeblock: {
              title: 'Modal search with results display',
              tabs: [
                {
                  code: './examples/modal-search-with-results-display.html',
                  language: 'html',
                },

                {
                  code: './examples/modal-search-with-results-display.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              "Illustrates how the search field handles and displays an error state when no results are found or when there's a search-related issue.",
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the appearance and behavior of a search field when it is disabled, preventing user interaction.',
            codeblock: {
              title: 'Disabled state',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a search field with minimum and maximum character length constraints, providing guidance on input requirements.',
            codeblock: {
              title: 'With character limits',
              tabs: [
                {
                  code: './examples/with-character-limits.html',
                  language: 'html',
                },

                {
                  code: './examples/with-character-limits.jsx',
                  language: 'preview-jsx',
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
