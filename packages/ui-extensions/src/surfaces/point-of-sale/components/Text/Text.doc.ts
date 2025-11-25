import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The `Text` component displays text with specific visual styles or tones. Use it to present content with appropriate emphasis, hierarchy, or tone while maintaining semantic meaning.' +
    '\n\nText provides flexible styling options that integrate with the POS design system while ensuring proper contrast and readability across different contexts.' +
    '\n\nThe component automatically adjusts line length for optimal readability based on container width, preventing overly long lines that reduce reading speed and comprehension in wider layouts.' +
    '\n\nText on mobile surfaces is blockish, rather than inline.',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Text` component.',
      type: 'Text',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Choose semantic types:** Use `strong` for emphasis, `small` for secondary info, `generic` for standard text.\n' +
        '- **Apply appropriate tones:** Use `success` for positive outcomes, `warning` or `critical` for alerts, `info` for helpful context, `auto` for neutral content.\n' +
        '- **Balance color intensity:** Use `strong` for emphasis, `base` for readability, `subdued` for secondary info.\n' +
        '- **Nest for mixed formatting:** Nest `Text` components when you need multiple styles within one text block.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Text styling is controlled by the POS design system through the provided properties—custom font families, sizes, or styling beyond the available options aren\'t supported.\n' +
        '- Complex rich text formatting isn\'t supported—use multiple `Text` components or nested text elements for varied formatting needs.',
    },
  ],
  defaultExample: {
    image: 'text-default.png',
    description:
      'Display text content using a `Text` component with customizable visual styles and tones. This example shows basic text with appropriate emphasis and hierarchy.',
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
  related: [],
};

export default data;
