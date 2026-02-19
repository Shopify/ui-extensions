import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Divider';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for truly distinct boundaries:** Dividers work best when separating fundamentally different content sections. Overusing dividers creates visual clutter and makes interfaces feel fragmented. Consider whether whitespace alone could achieve the same grouping.
- **Match visual weight to hierarchy:** The divider's prominence should reflect the importance of the separation. Major section breaks can support stronger visual dividers, while minor groupings need subtler separation or just whitespace.
- **Align with layout direction:** The divider's orientation should match your content flow. A horizontal divider between vertically stacked items or a vertical divider between horizontally arranged items creates clear, predictable separation.
- **Prefer whitespace for subtle grouping:** Whitespace often provides cleaner visual grouping than dividers. Before adding a divider, try using spacing properties on your layout components. Dividers should enhance clarity, not replace thoughtful spacing.`,
    },
  ],
  thumbnail: '/assets/templated-apis-screenshots/admin/components/divider.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the divider component.',
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
          layout: 'wrapped',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
          layout: 'wrapped',
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
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                  layout: 'wrapped',
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
                  language: 'html',
                },

                {
                  code: './examples/custom-color.jsx',
                  language: 'preview-jsx',
                  layout: 'wrapped',
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
                  language: 'html',
                },

                {
                  code: './examples/custom-direction.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/separating-form-sections.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/organizing-settings-panels.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/visual-breaks-in-section-layouts.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/separating-content-sections.jsx',
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
