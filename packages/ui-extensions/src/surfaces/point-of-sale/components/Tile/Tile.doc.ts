import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    "Tiles are customizable buttons that allow staff to complete actions quickly. Think of them as shortcuts--adding a 10% discount to an order, for example. Tiles provide contextual information and let merchants quickly access workflows, actions, and information from the smart grid and the top of detail pages. They're dynamic and can change based on surrounding context, such as what's in the cart.",
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
