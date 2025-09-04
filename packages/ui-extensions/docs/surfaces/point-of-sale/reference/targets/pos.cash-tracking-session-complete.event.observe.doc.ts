import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs.js';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionCompleteObserve,
  description: `An event extension target that observes when cash tracking session completes
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Cash Tracking Session Complete Observer',
      'targets',
      'pos-cash-tracking-session-complete-event-observe',
    ),
  },
  category: 'Targets',
  subCategory: 'Observe',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCashTrackingSessionStartObserve,
      subtitle: 'Target',
      type: 'blocks',
      url: 'pos-cash-tracking-session-start-event-observe',
    },
  ],
  type: 'Target',
  definitions: [CUSTOM_DATA('CashTrackingSessionCompleteData')],
};

export default data;
