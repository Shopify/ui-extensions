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
        codeblock: {
          title: 'Default',
          tabs: [
            { code: './examples/default.html', language: 'html' },
            { code: './examples/default.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          "Illustrates how the search field handles and displays an error state when no results are found or when there's a search-related issue.",
        codeblock: {
          title: 'With error state',
          tabs: [
            { code: './examples/with-error-state.html', language: 'html' },
            { code: './examples/with-error-state.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          'Demonstrates the appearance and behavior of a search field when it is disabled, preventing user interaction.',
        codeblock: {
          title: 'Disabled state',
          tabs: [
            { code: './examples/disabled-state.html', language: 'html' },
            { code: './examples/disabled-state.jsx', language: 'preview-jsx' },
          ],
        },
      },
      {
        description:
          'Showcases a search field with minimum and maximum character length constraints, providing guidance on input requirements.',
        codeblock: {
          title: 'With character limits',
          tabs: [
            { code: './examples/with-character-limits.html', language: 'html' },
            { code: './examples/with-character-limits.jsx', language: 'preview-jsx' },
          ],
        },
      },
    ],
  },
};

export default data;
