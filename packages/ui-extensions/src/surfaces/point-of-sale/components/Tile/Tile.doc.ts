import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'Use `s-tile` to create interactive cards that group related content and actions. Provides a structured way to present information with clear interaction areas.',
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
          language: 'HTML',
        },
      ],
    },
  },
  related: [],
};

export default data;
