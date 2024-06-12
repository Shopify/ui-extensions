import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.modal.render',
  description:
    'A full-screen extension target that renders when a `pos.home.tile.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock('Modal', 'targets', 'pos-home-modal-render'),
  },
  category: 'Targets',
  subCategory: 'Smart grid',
  isVisualComponent: false,
  related: [
    {
      name: 'pos.home.tile.render',
      url: '/docs/api/pos-ui-extensions/targets/pos-home-tile-render',
    },
  ],
  type: 'Target',
};

export default data;
