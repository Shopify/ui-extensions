import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The `Text` component displays text with specific visual styles and colors. Use it to present content with appropriate typography hierarchy and semantic coloring for different types of information.\n\nText provides a comprehensive typography system that ensures consistent styling and proper visual hierarchy across POS interfaces.\n\n`Text` components ensure proper text rendering across different device types and screen sizes while maintaining readability through appropriate line heights, letter spacing, and color contrast ratios. The component automatically adjusts line length for optimal readability based on container width, preventing overly long lines that reduce reading speed and comprehension in wider layouts.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Text` component.',
      type: 'TextProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'text-thumbnail.png',
  defaultExample: {
    image: 'text-default.png',
    codeblock: generateCodeBlock(
      'Show text with different styles',
      'text',
      'default.example',
    ),
    description:
      'Render text content with specific visual styles and colors. This example demonstrates using Text with different variants (body, heading, caption) and semantic colors to establish proper typography hierarchy and communicate information effectively throughout your POS interface.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Apply semantic colors to convey meaning:** Use color to communicate the nature and intent of your content. Apply \`TextSuccess\` for positive outcomes, \`TextCritical\` for errors, \`TextWarning\` for cautions, and \`TextInteractive\` for clickable elements.
- **Maintain consistent typography patterns:** Establish consistent patterns for how you use text variants across your POS UI extension. Similar types of content should use similar variants, helping users develop familiarity with your interface hierarchy.
- **Use subdued colors strategically:** Apply \`TextSubdued\` for secondary information that supports but doesn't compete with primary content. Use \`TextDisabled\` only for truly inactive content that users can't interact with.
- **Balance emphasis with clarity:** Use highlighting and interactive colors sparingly to maintain their effectiveness. Too many emphasized elements can reduce the impact of truly important content.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Text content is provided through child components rather than direct text properties—organize your text content through component composition.
- Typography and color options are limited to the predefined design system variants—custom fonts, sizes, or colors beyond the available options aren't supported.
- Complex rich text formatting requires multiple \`Text\` components with different variants and colors rather than inline formatting options.
      `,
    },
  ],
};

export default data;
