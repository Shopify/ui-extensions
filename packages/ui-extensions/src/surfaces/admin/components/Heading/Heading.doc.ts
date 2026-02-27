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
        'The heading component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'HeadingSlots',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
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
              'Standard heading for section titles and page content organization that creates a simple, clean title for a content section.',
            codeblock: {
              title: 'Basic heading',
              tabs: [
                {
                  code: './examples/basic-heading.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-heading.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Truncated heading that limits text to a specified number of lines, using ellipsis to indicate additional content for long product names or constrained layouts.',
            codeblock: {
              title: 'Heading with line clamping',
              tabs: [
                {
                  code: './examples/heading-with-line-clamping.html',
                  language: 'html',
                },

                {
                  code: './examples/heading-with-line-clamping.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Heading configured with custom ARIA roles and visibility settings to meet specific accessibility requirements or design constraints.',
            codeblock: {
              title: 'Heading with custom accessibility',
              tabs: [
                {
                  code: './examples/heading-with-custom-accessibility.html',
                  language: 'html',
                },

                {
                  code: './examples/heading-with-custom-accessibility.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates nested heading structure that automatically adjusts heading levels (h2, h3, h4) based on the current section depth, ensuring proper semantic document structure.',
            codeblock: {
              title: 'Heading within section hierarchy',
              tabs: [
                {
                  code: './examples/heading-within-section-hierarchy.html',
                  language: 'html',
                },

                {
                  code: './examples/heading-within-section-hierarchy.jsx',
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
