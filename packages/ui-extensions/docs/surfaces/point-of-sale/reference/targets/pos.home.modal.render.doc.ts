import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.modal.render',
  description:
    'Renders a full-screen modal interface launched from smart grid tiles. The modal appears when users tap a companion tile. Use this target for complete workflow experiences that require more space and functionality than the tile interface provides, such as multi-step processes, detailed information displays, or complex user interactions.' +
    '\n\nExtensions at this target support full navigation hierarchies with multiple screens, scroll views, and interactive components to handle sophisticated workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a full-screen modal from a tile',
      'targets',
      'pos-home-modal-render',
    ),
    description:
      'Build a full-screen modal interface launched from smart grid tiles. This example demonstrates creating a modal that appears when merchants tap a tile, supporting complete workflows with multiple screens, scroll views, and interactive components for sophisticated tasks.',
  },
  category: 'Targets',
  subCategory: 'Smart grid',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
