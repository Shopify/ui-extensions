import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.modal.render',
  description:
    'A full-screen extension target that renders when a `pos.home.tile.render` target calls for it',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Modal',
      'targets',
      'pos-home-modal-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Tile',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.home.tile.render',
      url: 'pos-home-tile-render',
    },
  ],
  type: 'Target',
};

export default data;
