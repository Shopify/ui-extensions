import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForTile = (title: string, fileName: string) =>
  generateCodeBlock(title, 'tile', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'The `Tile` component displays interactive buttons for the POS smart grid that allow merchants to complete actions quickly. Tiles serve as customizable shortcuts that provide contextual information and enable merchants to quickly access workflows, actions, and information from the smart grid.\n\nTiles are dynamic components that can change their appearance, content, and enabled state based on surrounding context such as cart contents, device conditions, or runtime state. They support tap interactions, visual feedback, and can display contextual information through titles, subtitles, and badge values.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Tile` component.',
      type: 'TileProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'tile-thumbnail.png',
  defaultExample: {
    image: 'tile-default.png',
    codeblock: generateCodeBlockForTile(
      'Show a smart grid tile',
      'default.example',
    ),
    description:
      'Display an interactive button on the POS smart grid for quick actions. This example shows how to create a tile that provides merchants with customizable shortcuts, displaying contextual information through titles, subtitles, and badges while supporting tap interactions and dynamic state changes.',
  },
};

export default data;
