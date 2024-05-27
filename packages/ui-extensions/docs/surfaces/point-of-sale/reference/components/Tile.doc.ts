import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForTile = (title: string, fileName: string) =>
  generateCodeBlock(title, 'tile', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Tile',
  description:
    'Tiles are customizable buttons that allow staff to complete actions quickly. Think of them as shortcuts--adding a 10% discount to an order, for example. Tiles provide contextual information and let merchants quickly access workflows, actions, and information from the smart grid and the top of detail pages. They’re dynamic and can change based on surrounding context, such as what’s in the cart.',
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
  defaultExample: {
    codeblock: generateCodeBlockForTile(
      'Render a tile on smart grid',
      'default.example',
    ),
  },
};

export default data;
