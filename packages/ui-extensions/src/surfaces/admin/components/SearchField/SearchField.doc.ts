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
      sectionContent: `- The SearchField automatically includes a clear button when text is entered, so you should not create your own clear button`,
    },
  ],
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
  examples: {
    description: 'Component examples',
    examples: [
      {
        description:
          'Add a search input so merchants can find items quickly. This example shows a search field with a visually hidden label and placeholder text.',
        codeblock: {
          title: 'Add a basic search field',
          tabs: [{code: './examples/default.html', language: 'html'}],
        },
      },
      {
        description:
          'Display an error message when a search query is invalid or encounters a problem. This example shows a search field with a pre-filled query and a static error message.',
        codeblock: {
          title: 'Show a search error',
          tabs: [
            {code: './examples/with-error-state.html', language: 'html'},
          ],
        },
      },
      {
        description:
          'Disable a search field to prevent interaction when search is temporarily unavailable. This example shows a disabled search field with placeholder text explaining the state.',
        codeblock: {
          title: 'Disable a search field',
          tabs: [
            {code: './examples/disabled-state.html', language: 'html'},
          ],
        },
      },
      {
        description:
          'Set minimum and maximum character lengths to control the search query length. This example shows a search field that requires at least 3 characters and allows up to 50.',
        codeblock: {
          title: 'Set character length limits',
          tabs: [
            {code: './examples/with-character-limits.html', language: 'html'},
          ],
        },
      },
    ],
  },
};

export default data;
