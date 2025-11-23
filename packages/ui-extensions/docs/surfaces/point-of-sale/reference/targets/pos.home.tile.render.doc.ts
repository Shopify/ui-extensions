import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'pos.home.tile.render',
  description:
    "Renders a single interactive tile component on the POS home screen's smart grid. The tile appears once during home screen initialization and remains persistent until navigation occurs. Use this target for high-frequency actions, status displays, or entry points to workflows that merchants need daily." +
    '\n\nExtensions at this target can dynamically update properties like enabled state and badge values in response to cart changes or device conditions. Tiles typically invoke `api.action.presentModal()` to launch the companion modal for complete workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Show a smart grid tile',
      'targets',
      'pos-home-tile-render',
    ),
    description:
      'Create an interactive tile on the POS home screen smart grid. This example demonstrates rendering a tile that appears on the home screen, providing merchants with a quick access point to launch your extension modal for daily workflows and high-frequency actions.',
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
