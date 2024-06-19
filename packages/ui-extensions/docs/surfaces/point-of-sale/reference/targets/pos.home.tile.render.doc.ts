import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.tile.render',
  description: 'A static extension target that renders as a smart grid tile',
  defaultExample: {
    codeblock: generateCodeBlock('Tile', 'targets', 'pos-home-tile-render'),
  },
  category: 'Targets',
  subCategory: 'Smart grid',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.home.modal.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-home-modal-render',
    },
  ],
  type: 'Target',
};

export default data;
