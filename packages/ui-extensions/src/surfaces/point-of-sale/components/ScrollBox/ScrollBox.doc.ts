import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Scroll box',
  description:
    'The scroll box component creates a scrollable area for content that exceeds container bounds. Use it to display large amounts of content within constrained spaces while maintaining usability.' +
    '\n\nThe component creates a defined scrollable area with customizable dimensions and scroll behavior.',
  thumbnail: 'scrollbox-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the scroll box component.',
      type: 'ScrollBox',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'scrollbox-default.png',
    description:
      'Create scrollable content areas using a scroll box component for content that exceeds container bounds. This example shows a basic scrollable area with customizable dimensions.',
    codeblock: {
      title: 'Create a scrollable content area',
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
- **Set clear dimensions:** Use percentage values for responsive layouts or pixels for exact dimensions.
- **Use for appropriate content:** Reserve scroll box for long lists or dynamic content that genuinely needs scrolling, not short content that fits within available space.
`,
    },
  ],
  related: [],
};

export default data;
