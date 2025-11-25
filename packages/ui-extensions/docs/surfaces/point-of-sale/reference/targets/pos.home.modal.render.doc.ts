import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.modal.render',
  description:
    'Renders a full-screen modal interface launched from smart grid tiles. The modal appears when users tap a companion tile. Use this target for complete workflow experiences that require more space and functionality than the tile interface provides, such as multi-step processes, detailed information displays, or complex user interactions.' +
    '\n\nExtensions at this target support full navigation hierarchies with multiple screens, scroll views, and interactive components to handle sophisticated workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Show a modal from a tile',
      'targets',
      'pos-home-modal-render',
    ),
    description:
      'Create a full-screen modal interface launched from smart grid tiles. This example shows how to render a complete workflow experience with navigation, screens, and interactive components that appears when merchants tap your companion tile.',
  },
  category: 'Targets',
  subCategory: 'Home screen (smart grid)',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
