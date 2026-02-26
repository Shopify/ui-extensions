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
    description:
      'Create a section with a heading to group related content. This example shows a basic section with a title and description text.',
    codeblock: {
      title: 'Add a content section with a heading',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
          layout: 'page',
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
              'Nest sections to create visual and semantic hierarchy that automatically adjusts heading levels and styling. This example shows three levels of nesting for order details, customer information, and a billing address.',
            codeblock: {
              title: 'Create nested sections with automatic visual hierarchy',
              tabs: [
                {
                  code: './examples/nested-sections-with-visual-level-differences.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use `accessibilityLabel` to provide screen readers with additional context beyond the visible heading. This example shows a payment summary section where the label describes the full purpose of the section.',
            codeblock: {
              title: 'Add an accessibility label for screen readers',
              tabs: [
                {
                  code: './examples/section-with-accessibility-label.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Set `padding` to none to let content like tables extend to the section edges. This example shows a product table rendered full-width within a section.',
            codeblock: {
              title: 'Remove padding for full-width content',
              tabs: [
                {
                  code: './examples/full-width-content-layout.html',
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
