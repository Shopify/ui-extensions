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
  subCategory: 'Titles and text',
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
