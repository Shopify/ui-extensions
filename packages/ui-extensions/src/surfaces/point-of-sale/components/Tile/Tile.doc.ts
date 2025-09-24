import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    "Customizable buttons that allow merchants to complete actions quickly. Tiles provide contextual information and let merchants access workflows, actions, and information from the Smart Grid and the top of detail pages. They're dynamic and can change based on surrounding context, such as what's in the cart.",
  thumbnail: 'tile-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Tile',
    },
    {
      title: 'Events',
      description: '',
      type: 'TileEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'tile-default.png',
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
