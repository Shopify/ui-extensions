import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    'The `Heading` component renders hierarchical titles to communicate the structure and organization of page content. Heading levels adjust automatically based on nesting within parent Section components, ensuring a meaningful page outline.' +
    '\n\nUse headings to create clear information hierarchy and help users navigate complex interfaces efficiently.' +
    '\n\n`Heading` components provide consistent typographic scaling that maintains visual hierarchy while ensuring headings remain readable at all levels, even when deeply nested within multiple `Section` components.',
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Heading` component.',
      type: 'Heading',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'Code',
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
