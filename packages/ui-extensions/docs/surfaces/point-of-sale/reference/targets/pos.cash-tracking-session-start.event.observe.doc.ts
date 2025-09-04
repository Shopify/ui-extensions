import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {CUSTOM_DATA} from '../helpers/helper.docs.js';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionStartObserve,
  description: `An event extension target that observes when cash tracking session starts
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Cash Tracking Session Start Observer',
      'targets',
      'pos-cash-tracking-session-start-event-observe',
    ),
  },
  category: 'Targets',
  subCategory: 'Observe',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosCashTrackingSessionCompleteObserve,
      subtitle: 'Target',
      type: 'blocks',
      url: 'pos-cash-tracking-session-complete-event-observe',
    },
  ],
  type: 'Target',
  definitions: [CUSTOM_DATA('CashTrackingSessionStartData')],
};

export default data;
