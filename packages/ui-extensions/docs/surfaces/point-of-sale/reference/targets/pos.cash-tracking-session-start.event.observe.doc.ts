import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionStartObserve,
  description:
    'An event extension target that observes when cash tracking session starts',
  category: 'Targets',
  subCategory: 'Cash tracking',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCashTrackingSessionCancelObserve,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-cancel-observe',
    },
    {
      name: ExtensionTargetType.PosCashTrackingSessionCompleteObserve,
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-complete-observe',
    },
  ],
  type: 'Target',
};

export default data;
