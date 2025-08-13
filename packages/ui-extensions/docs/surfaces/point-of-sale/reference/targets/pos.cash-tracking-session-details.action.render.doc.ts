import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionDetailsActionRender,
  description:
    'A full-screen extension target that renders when a `pos.cash-tracking-session-details.action.menu-item.render` target calls for it',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Action',
      'targets',
      'cash-tracking-session-details-action',
    ),
  },
  category: 'Targets',
  subCategory: 'Cash tracking',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCashTrackingSessionDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosCashTrackingSessionDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-details-block-render',
    },
  ],
  type: 'Target',
};

export default data;