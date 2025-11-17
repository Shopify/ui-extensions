import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionStartObserve,
  description:
    'Observes when cash tracking sessions begin, triggering when merchants start cash handling operations. Use this target for monitoring cash handling activities for compliance, security, or operational reporting purposes.' +
    '\n\nExtensions at this target receive session data including the session ID and opening time when a new cash tracking session is initiated.',
  category: 'Targets',
  subCategory: 'Cash tracking',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCashTrackingSessionCompleteObserve,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-complete-observe',
    },
  ],
  type: 'Target',
  definitions: [CUSTOM_DATA('CashTrackingSessionStartData')],
};

export default data;
