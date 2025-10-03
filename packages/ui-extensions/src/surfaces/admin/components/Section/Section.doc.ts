import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Section';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/section.png',
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Organizing your page in a logical structure based on nesting levels.
- Creating consistency across pages.`,
    },
    {
      title: 'Considerations',
      type: 'Generic' as const,
      anchorLink: 'considerations',
      sectionContent: `- When adding headings inside sections they automatically use a specific style, which helps keep the content organized and clear.
- Built-in spacing is added between nested sections, as well as between heading and content.
- **Level 1:** Display as responsive cards with background color, rounded corners, and shadow effects. Includes outer padding that can be removed when content like \`s-table\` needs to expand to the full width of the section.
- **Nested sections:** Don't have any background color or effects by default.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Section',
    },
    {
      title: 'Slots',
      description: '',
      type: 'SectionSlots',
    },
  ],
  defaultExample: {
    image: 'section-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'page',
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
              'Demonstrates a level 1 section that creates an elevated container with a heading and multiple form fields for collecting customer information. This example shows how sections provide visual hierarchy and structure for input elements.',
            codeblock: {
              title: 'Top-Level Section with Form Elements',
              tabs: [
                {
                  code: './examples/top-level-section-with-form-elements.html',
                  language: 'html',
                },

                {
                  code: './examples/top-level-section-with-form-elements.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how sections can be nested to create a hierarchical layout, with each nested section automatically adjusting its visual style. This example shows an order details section containing customer and billing information, demonstrating the automatic visual leveling of nested sections.',
            codeblock: {
              title: 'Nested Sections with Visual Level Differences',
              tabs: [
                {
                  code: './examples/nested-sections-with-visual-level-differences.html',
                  language: 'html',
                },

                {
                  code: './examples/nested-sections-with-visual-level-differences.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to add an accessibility label to a section, providing an additional hidden heading for screen readers while maintaining a visible heading. This example demonstrates a payment summary section with both a visible heading and an accessibility-focused label.',
            codeblock: {
              title: 'Section with Accessibility Label',
              tabs: [
                {
                  code: './examples/section-with-accessibility-label.html',
                  language: 'html',
                },

                {
                  code: './examples/section-with-accessibility-label.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates using a section with `padding="none"` to create a full-width layout, ideal for displaying tables or other content that requires edge-to-edge rendering. This example shows a product table within a section without additional padding.',
            codeblock: {
              title: 'Full-width Content Layout',
              tabs: [
                {
                  code: './examples/full-width-content-layout.html',
                  language: 'html',
                },

                {
                  code: './examples/full-width-content-layout.jsx',
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
