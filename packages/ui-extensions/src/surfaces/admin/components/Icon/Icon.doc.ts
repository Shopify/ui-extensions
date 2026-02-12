import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Icon';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/icon.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Available icons',
      type: 'Generic' as const,
      anchorLink: 'available-icons',
      sectionContent:
        'Search and filter across all the available icons: {{ICON_PREVIEW_IFRAME}}',
    },
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Orienting themselves and understanding available actions
- Quickly identifying information and recognizing patterns`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `Icons should:
- Use the same icon consistently for the same meaning
- Appear next to related text labels
- Only be used when their meaning is clear`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Icon',
    },
  ],
  defaultExample: {
    description:
      'Display common icons for navigation and actions. Click to interact with the preview.',
    codeblock: {
      title: 'Display icons',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
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
        title: '',
        examples: [
          {
            description:
              'Apply color-coded tones to convey status and semantic meaning. Click to interact with the preview.',
            codeblock: {
              title: 'Apply semantic tones',
              tabs: [
                {
                  code: './examples/with-semantic-tone.html',
                  language: 'html',
                },

                {
                  code: './examples/with-semantic-tone.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Use compact sizing for space-constrained interfaces. Click to interact with the preview.',
            codeblock: {
              title: 'Reduce the size',
              tabs: [
                {
                  code: './examples/small-size.html',
                  language: 'html',
                },

                {
                  code: './examples/small-size.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Use lower contrast for secondary actions and supporting information. Click to interact with the preview.',
            codeblock: {
              title: 'Apply subdued color',
              tabs: [
                {
                  code: './examples/subdued-color.html',
                  language: 'html',
                },

                {
                  code: './examples/subdued-color.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Add an ID for JavaScript targeting or CSS styling. Click to interact with the preview.',
            codeblock: {
              title: 'Add an ID',
              tabs: [
                {
                  code: './examples/with-id-property.html',
                  language: 'html',
                },

                {
                  code: './examples/with-id-property.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Associate icons with interactive elements for enhanced accessibility. Click to interact with the preview.',
            codeblock: {
              title: 'Link to related content',
              tabs: [
                {
                  code: './examples/with-interest-relationship.html',
                  language: 'html',
                },

                {
                  code: './examples/with-interest-relationship.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '200px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Add icons to buttons to reinforce the action visually. Click to interact with the preview.',
            codeblock: {
              title: 'Use in buttons',
              tabs: [
                {
                  code: './examples/in-button-components.html',
                  language: 'html',
                },

                {
                  code: './examples/in-button-components.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Combine icons with badges to enhance status communication. Click to interact with the preview.',
            codeblock: {
              title: 'Use in badges',
              tabs: [
                {
                  code: './examples/in-badge-components.html',
                  language: 'html',
                },

                {
                  code: './examples/in-badge-components.jsx',
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
