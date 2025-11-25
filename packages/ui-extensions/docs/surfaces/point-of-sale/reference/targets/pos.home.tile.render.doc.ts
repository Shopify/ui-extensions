import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.tile.render',
  description:
    "Renders a single interactive tile component on the POS home screen's smart grid. The tile appears once during home screen initialization and remains persistent until navigation occurs. Use this target for high-frequency actions, status displays, or entry points to workflows that merchants need daily." +
    '\n\nExtensions at this target can dynamically update properties like enabled state and badge values in response to cart changes or device conditions. Tiles typically invoke `api.action.presentModal()` to launch the companion modal for complete workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a smart grid tile',
      'targets',
      'pos-home-tile-render',
    ),
    description:
      'Add an interactive tile to the POS home screen smart grid for high-frequency actions. This example shows how to create a persistent tile that can dynamically update its enabled state and badge values, providing merchants with quick access to daily workflows and status displays.',
  },
  category: 'Targets',
  subCategory: 'Home screen (smart grid)',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
