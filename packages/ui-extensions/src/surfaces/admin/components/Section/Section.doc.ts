import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Section';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/section.png',
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use to group related content:** The component provides semantic structure and visual hierarchy for grouping related content. Each section should contain a cohesive set of information or controls that belong together.
- **Provide meaningful headings:** Section headings help merchants scan and navigate content. Write headings that clearly describe what's in the section rather than using vague labels.
- **Nest thoughtfully:** Nested sections create visual and semantic hierarchy, but excessive nesting creates overly complex structures. Limit nesting to 2-3 levels where the hierarchy is meaningful and helps merchants understand the content organization.
- **Consider when to remove padding:** Full-width content like tables or images might need to extend to section edges. Remove padding when the content design requires it, but ensure nested content within has appropriate spacing.
- **Use accessibility labels when needed:** When the visible heading doesn't fully convey the section's purpose to screen reader users, provide an accessibility label with additional context.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't include expand/collapse functionality. If you need collapsible sections, you'll need to implement this using additional state management and accessibility attributes.
- Section headings automatically increment their semantic level based on nesting depth, but they stop at h4 for deeply nested sections. Content nested beyond three levels might have less clear document structure.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the section component.',
      type: 'Section',
    },
    {
      title: 'Slots',
      description:
        'The section component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
          layout: 'page',
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
              'Demonstrates a level 1 section with a heading and multiple form fields. This example shows how sections provide visual hierarchy and structure for input elements.',
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
              'Illustrates how sections can be nested to create a hierarchical layout, with each nested section automatically adjusting its visual style. This example demonstrates the automatic visual leveling of nested sections.',
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
              'Shows how to add an accessibility label to a section, providing an additional hidden heading for screen readers while maintaining a visible heading.',
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
              'Demonstrates using a section with `padding="none"` to create a full-width layout, ideal for displaying tables or other content that requires edge-to-edge rendering.',
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
