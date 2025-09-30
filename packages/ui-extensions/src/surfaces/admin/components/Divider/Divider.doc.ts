import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Divider';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Separating elements inside sections.
- Visually grouping related content in forms and lists.`,
    },
  ],
  thumbnail: '/assets/templated-apis-screenshots/admin/components/divider.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Divider',
    },
  ],
  defaultExample: {
    image: 'divider-default.png',
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
              'Demonstrates the default divider with standard base color and inline direction.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows a divider with a strong color variant for increased visual emphasis.',
            codeblock: {
              title: 'Custom color',
              tabs: [
                {
                  code: './examples/custom-color.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates using a block-direction divider within an inline stack to create vertical separation between items.',
            codeblock: {
              title: 'Custom direction',
              tabs: [
                {
                  code: './examples/custom-direction.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Uses a divider to visually group and separate different sections of a form, improving readability and user comprehension.',
            codeblock: {
              title: 'Separating form sections',
              tabs: [
                {
                  code: './examples/separating-form-sections.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates using a divider to logically separate basic and advanced settings in a configuration panel.',
            codeblock: {
              title: 'Organizing settings panels',
              tabs: [
                {
                  code: './examples/organizing-settings-panels.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shows how dividers can be used to create clean, segmented sections within a section, improving information hierarchy.',
            codeblock: {
              title: 'Visual breaks in section layouts',
              tabs: [
                {
                  code: './examples/visual-breaks-in-section-layouts.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates using dividers to create clear, visually distinct sections for different metrics or content blocks.',
            codeblock: {
              title: 'Separating content sections',
              tabs: [
                {
                  code: './examples/separating-content-sections.html',
                  language: 'preview',
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
