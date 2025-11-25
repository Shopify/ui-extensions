import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.modal.render',
  description:
    'Renders a full-screen modal interface launched from smart grid tiles. The modal appears when users tap a companion tile. Use this target for complete workflow experiences that require more space and functionality than the tile interface provides, such as multi-step processes, detailed information displays, or complex user interactions.' +
    '\n\nExtensions at this target support full navigation hierarchies with multiple screens, scroll views, and interactive components to handle sophisticated workflows.',
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Create a full-screen modal for a smart grid tile',
      'targets',
      'pos-home-modal-render',
    ),
    description:
      'Build a complete workflow experience launched from a smart grid tile. This example demonstrates creating a full-screen modal with navigation, multiple screens, and interactive components for sophisticated workflows that require more space than the tile interface provides.',
  },
  category: 'Targets',
  subCategory: 'Smart grid',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
