import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'The `Tile` component displays interactive buttons for the POS smart grid that allow merchants to complete actions quickly. Tiles serve as customizable shortcuts that provide contextual information and enable merchants to quickly access workflows, actions, and information from the smart grid.' +
    '\n\nTiles are dynamic components that can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They support tap interactions, visual feedback, and can display contextual information through titles, subtitles, and badge values.',
  thumbnail: 'tile-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Tile` component.',
      type: 'Tile',
    },
    {
      title: 'Events',
      description:
        'The `Tile` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
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
