import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.modal.render',
  description:
    'Renders a full-screen modal interface launched from smart grid tiles. The modal appears when users tap a companion tile. Use this target for complete workflow experiences that require more space and functionality than the tile interface provides, such as multi-step processes, detailed information displays, or complex user interactions.' +
    '\n\nExtensions at this target support full navigation hierarchies with multiple screens, scroll views, and interactive components to handle sophisticated workflows.',
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
