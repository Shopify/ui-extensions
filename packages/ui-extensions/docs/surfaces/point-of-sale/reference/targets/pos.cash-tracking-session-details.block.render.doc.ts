import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionDetailsBlockRender,
  description: 'Renders a custom section within register details screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Block',
      'targets',
      'pos-cash-tracking-session-details-block-render',
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
      name: ExtensionTargetType.PosCashTrackingSessionDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-details-action-render',
    },
    {
      name: ExtensionTargetType.PosCashTrackingSessionDetailsBannerRender,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-details-banner-render',
    },
  ],
  type: 'Target',
};

export default data;
