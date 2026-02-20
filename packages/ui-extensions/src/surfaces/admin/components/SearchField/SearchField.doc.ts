import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/SearchField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/searchfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for inline search:** Choose the component for filtering content within specific sections or lists. For global navigation or complex multi-step searches, use a more robust search pattern.
- **Make the search scope clear:** Users need to understand what they're searching through. Use specific labels and placeholders that explain what content will be searched and what attributes they can search by.
- **Provide immediate feedback:** Show search results or filtered content as merchants type when possible. Immediate feedback helps merchants refine their search query and builds confidence in the search functionality.
- **Handle empty states gracefully:** When the search field is cleared or returns no results, show appropriate messaging. For cleared searches, restore the full content list. For no results, suggest alternative actions or broaden the search criteria.
- **Set appropriate search thresholds:** Prevent searches that would return overwhelming or meaningless results. Starting searches after 2-3 characters gives the system enough information to provide useful results.`,
    },
  ],
  definitions: [
    {
      title: 'SearchField',
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
