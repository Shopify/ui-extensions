import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Divider',
  description:
    'The divider component creates visual separation between content sections by rendering a horizontal or vertical line. Use it to organize information and improve content hierarchy.',
  thumbnail: 'divider-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the divider component.',
      type: 'Divider',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'divider-default.png',
    description:
      'Separate content sections using a divider component. This example shows a basic horizontal divider.',
    codeblock: {
      title: 'Separate content sections with a divider',
      tabs: [
        {
          code: './examples/default.html',
          language: 'HTML',
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
- **Choose appropriate direction:** Use \`inline\` (horizontal) for most content separation. Use \`block\` (vertical) for columns or sidebar boundaries.
- **Avoid overuse:** Use dividers strategically. In dense interfaces, consider whitespace or typography hierarchy instead.
`,
    },
  ],
  related: [],
};

export default data;
