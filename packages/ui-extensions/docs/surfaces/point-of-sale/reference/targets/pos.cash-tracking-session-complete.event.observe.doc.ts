import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionCompleteObserve,
  description:
    'Observes when cash tracking sessions complete, triggering when merchants finish cash handling operations. Use this target for monitoring cash handling completion for audit trails, compliance reporting, or operational analytics.' +
    '\n\nExtensions at this target receive session data including the session ID, opening time, and closing time when a cash tracking session is completed.',
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
  defaultExample: {
    codeblock: generateCodeBlock(
      'Track cash session closures',
      'targets',
      'pos-cash-tracking-session-complete-event-observe',
    ),
    description:
      'Subscribe to cash tracking session completion events to generate end-of-shift reports and reconcile cash handling. This example demonstrates logging session closures with session ID, opening time, and closing time, enabling audit trails, compliance notifications, and comprehensive cash management tracking.',
  },
};

export default data;
