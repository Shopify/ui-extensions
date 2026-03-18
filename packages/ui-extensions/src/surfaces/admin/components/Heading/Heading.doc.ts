import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Heading';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/heading.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use headings to structure content hierarchy:** The component creates a clear outline of your interface that helps merchants navigate and understand content organization. Every major section should have a heading.
- **Let the component handle semantic levels:** The component automatically assigns appropriate HTML heading levels (h2, h3, h4) based on nesting depth. This ensures proper document structure for screen readers without manual management.
- **Write clear, descriptive headings:** Headings should clearly describe the section they introduce. Avoid vague headings like "Details" when "Product details" or "Customer details" would be clearer.
- **Use line clamping sparingly:** Line clamping helps manage long headings in constrained spaces like cards, but truncated headings can hide important information. Only clamp when it's absolutely necessary.
- **Maintain consistent styling within contexts:** Use similar heading styles for similar content types. For example, all card headings in a list should look the same.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Heading levels (h2, h3, h4) are determined automatically based on nesting depth. You can't set a specific heading level, but you can remove heading semantics entirely by setting \`accessibilityRole\` to \`"presentation"\` or \`"none"\`.
- Line clamping truncates text visually but doesn't provide a way to show the full heading text on hover or through other interactions. Truncated content might not be fully accessible to screen readers.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the heading component.',
      type: 'Heading',
    },
    {
      title: 'Slots',
      description:
        'The heading component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/app-ui/using-web-components#slots).',
      type: 'HeadingSlots',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
    description:
      'Create a heading for a content section. This example shows the basic heading component with default styling and automatic heading level assignment.',
    codeblock: {
      title: 'Add a basic heading',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
              'Limit the number of visible lines in a heading using the `lineClamp` property. This example shows a heading truncated to two lines with an ellipsis, useful for long product names in constrained layouts.',
            codeblock: {
              title: 'Truncate long headings with line clamping',
              tabs: [
                {
                  code: './examples/heading-with-line-clamping.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              "Configure the heading's ARIA role and visibility for assistive technologies. This example shows a heading with `accessibilityRole` set to presentation and `accessibilityVisibility` set to hidden, removing it from the document outline.",
            codeblock: {
              title: 'Customize accessibility roles and visibility',
              tabs: [
                {
                  code: './examples/heading-with-custom-accessibility.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Nest headings inside section components to automatically assign appropriate heading levels (h2, h3, h4). This example shows how the heading level increments with each nested section, creating proper document structure for screen readers.',
            codeblock: {
              title: 'Create a heading hierarchy with nested sections',
              tabs: [
                {
                  code: './examples/heading-within-section-hierarchy.html',
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
