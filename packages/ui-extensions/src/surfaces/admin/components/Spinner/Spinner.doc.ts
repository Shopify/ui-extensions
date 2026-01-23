import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Spinner';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/spinner.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use to notify merchants that their action is being processed
- Don't use for entire page loads`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Spinner',
    },
  ],
  defaultExample: {
    image: 'spinner-default.png',
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
              'Standard loading spinner with accessibility label for screen readers.',
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
              'Centered loading indicator with text in a section layout for content loading states.',
            codeblock: {
              title: 'Loading state in section',
              tabs: [
                {
                  code: './examples/loading-state-in-section.html',
                  language: 'html',
                },

                {
                  code: './examples/loading-state-in-section.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Compact inline loading indicator for form submissions and quick actions.',
            codeblock: {
              title: 'Inline loading with text',
              tabs: [
                {
                  code: './examples/inline-loading-with-text.html',
                  language: 'html',
                },

                {
                  code: './examples/inline-loading-with-text.jsx',
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
