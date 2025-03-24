import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionCompleteObserve,
  description: `An event extension target that observes when cash tracking session completes
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  category: 'Targets',
  subCategory: 'Cash tracking',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCashTrackingSessionStartObserve,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-start-observe',
    },
  ],
  type: 'Target',
  definitions: [CUSTOM_DATA('CashTrackingSessionCompleteData')],
};

export default data;
