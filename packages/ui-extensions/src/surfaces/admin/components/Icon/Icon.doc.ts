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
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Icon',
    },
  ],
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'Code',
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
        title: 'Basic usage',
        examples: [
          {
            description:
              'Standard icons for common merchant interface actions and navigation. Demonstrates rendering multiple icons in an inline stack, showing different types of icons used for navigation and actions.',
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
              'Icons with color-coded tones to convey status and semantic meaning.',
            codeblock: {
              title: 'With semantic tone',
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
              'Compact icon sizing for space-constrained interfaces and inline usage. Shows how to render a small-sized icon that takes up minimal space while maintaining clarity.',
            codeblock: {
              title: 'Small size',
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
              'Lower contrast icon for secondary actions and supporting information.',
            codeblock: {
              title: 'Subdued color',
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
              'Icon with unique identifier for JavaScript targeting and styling. Demonstrates adding a specific ID to an icon, which can be used for JavaScript interactions, CSS styling, or accessibility purposes.',
            codeblock: {
              title: 'With id property',
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
              'Icon associated with interactive elements for enhanced accessibility context.',
            codeblock: {
              title: 'With interest relationship',
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
              "Icons integrated within button components for clear action identification. Shows how icons can be added to buttons to visually reinforce the button's action, using both positive (add) and negative (delete) tones.",
            codeblock: {
              title: 'In button components',
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
              'Icons combined with badges to enhance status communication and visual hierarchy. Demonstrates using icons with badges to provide visual status indicators, using success and warning tones to convey different states.',
            codeblock: {
              title: 'In badge components',
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
