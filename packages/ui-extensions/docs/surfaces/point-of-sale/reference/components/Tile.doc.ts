import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForTile = (title: string, fileName: string) =>
  generateCodeBlock(title, 'tile', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description: `Display interactive buttons for the POS smart grid that allow merchants to complete actions quickly.
  > Note:
  > The appearance of \`destructive\` has been updated as of POS 10.0.0 to appear as an active state.`,
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Tile',
      description: '',
      type: 'TileProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'tile-thumbnail.png',
  defaultExample: {
    image: 'tile-default.png',
    codeblock: generateCodeBlockForTile(
      'Render a tile on smart grid',
      'default.example',
    ),
  },
};

export default data;
