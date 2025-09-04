import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.tile.render',
  description: 'A static extension target that renders as a smart grid tile',
  defaultExample: {
    codeblock: generateJsxCodeBlock('Tile', 'targets', 'pos-home-tile-render'),
  },
  category: 'Targets',
  subCategory: 'Tile',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.home.modal.render',
      url: 'pos-home-modal-render',
    },
  ],
  type: 'Target',
};

export default data;
