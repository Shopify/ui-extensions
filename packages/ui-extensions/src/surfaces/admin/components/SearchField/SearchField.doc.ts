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
    image: 'searchfield-default.png',
    description:
      'Add a search input so merchants can find items quickly. This example shows a search field with a visually hidden label and placeholder text.',
    codeblock: {
      title: 'Add a basic search field',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Display an error message when a search query is invalid or encounters a problem. This example shows a search field with a pre-filled query and a static error message.',
            codeblock: {
              title: 'Show a search error',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Disable a search field to prevent interaction when search is temporarily unavailable. This example shows a disabled search field with placeholder text explaining the state.',
            codeblock: {
              title: 'Disable a search field',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set minimum and maximum character lengths to control the search query length. This example shows a search field that requires at least 3 characters and allows up to 50.',
            codeblock: {
              title: 'Set character length limits',
              tabs: [
                {
                  code: './examples/with-character-limits.html',
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
