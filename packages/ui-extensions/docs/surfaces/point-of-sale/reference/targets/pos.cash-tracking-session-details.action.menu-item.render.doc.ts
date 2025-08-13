import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionDetailsActionMenuItemRender,
  description:
    'A static extension target that renders as a menu item on the register details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Menu item',
      'targets',
      'cash-tracking-session-details-menu-item',
    ),
  },
  category: 'Targets',
  subCategory: 'Cash tracking',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCashTrackingSessionDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-details-action-render',
    },
    {
      name: ExtensionTargetType.PosCashTrackingSessionDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;
