import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The text component displays text with specific visual styles or tones. Use it to present content with appropriate emphasis, hierarchy, or tone while maintaining semantic meaning.' +
    '\n\nText on mobile surfaces is blockish, rather than inline.',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the text component.',
      type: 'Text',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'text-default.png',
    description:
      'Display text content using a text component with customizable visual styles and tones. This example shows basic text with appropriate emphasis and hierarchy.',
    codeblock: {
      title: 'Display text with visual styles',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose semantic types:** Use \`strong\` for emphasis, \`small\` for secondary info, \`generic\` for standard text.
- **Apply appropriate tones:** Use \`success\` for positive outcomes, \`warning\` or \`critical\` for alerts, \`info\` for helpful context, \`auto\` for neutral content.
- **Balance color intensity:** Use \`strong\` for emphasis, \`base\` for readability, \`subdued\` for secondary info.
- **Nest for mixed formatting:** Nest text components when you need multiple styles within one text block.
- **Use stack for icons and badges:** When combining text with icons or badges, use stack with direction="inline" instead of nesting components inside text.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Complex rich text formatting isn't supported—use multiple text components or nested text elements for varied formatting needs.

Nesting icon or badge components inside text isn't supported due to React Native alignment limitations—use stack with direction="inline" and alignItems="center" instead to properly align icons and badges with text.
`,
    },
  ],
  related: [],
};

export default data;
